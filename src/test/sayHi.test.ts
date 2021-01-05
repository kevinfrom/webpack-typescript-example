// test if sayHi() console logs 'Hello World!'
import { sayHi } from '../utilities'
import fs from 'fs'
import path from 'path'

test('sayHi() console logs `Hello World!`', () => {
    console.log = jest.fn()

    sayHi()

    expect(console.log).toHaveBeenCalledWith('Hello World!')
})

test('Bundled script contains console.log(\'Hello World!\')', () => {
    console.log = jest.fn()

    const root = path.dirname(path.dirname(__dirname))
    const filePath = path.resolve(root, 'dist', 'bundle.js')
    const fileData = fs.readFileSync(filePath).toString()

    let result: boolean = /console\.log\(['"]Hello World!['"]\)/.test(fileData)
    expect(result).toBeTruthy()
})
