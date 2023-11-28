#!/usr/bin/env node
//
// Executes a workaround for monorepos. If not in a monorepo, nothing will happen.
//

const fs = require('fs/promises')

//
// Inline the symbolic link. Prevents the symlinked @fullcalendar/angular from acessing
// its peer dependencies and having two Angulars and leading to errors.
// This is the fault of Angular custom dependency-resolution logic.
//
copyDirIfSymlink('./node_modules/@fullcalendar/angular').catch((error) => {
  console.error(error.message)
  process.exit(1)
})

async function copyDirIfSymlink(sourcePath) {
  const stats = await fs.lstat(sourcePath)

  if (stats.isSymbolicLink()) {
    const realPath = await fs.realpath(sourcePath)

    await fs.unlink(sourcePath)
    await fs.cp(realPath, sourcePath, { recursive: true })
  }
}
