import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// this is a top-level await 
export async function openDb() {
    // open the database
   return open({
        filename: './database.db',
        driver: sqlite3.Database
    })
}
