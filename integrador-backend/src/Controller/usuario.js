import { openDb } from '../configDB.js';

export async function createUsuario(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Usuario ( id INTEGER PRIMARY KEY, nome VARCHAR (100) NOT NULL, email VARCHAR (100) NOT NULL )')
    });
}



export async function selectUsuarios(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Usuario')
            .then(usuarios => res.json(usuarios))
    });
}

export async function selectUsuario(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Usuario WHERE id=?', [id])
            .then(pessoa => res.json(pessoa))
    });

}

export async function insertUsuario(req, res) {
    let usuario = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Usuario (nome, email) VALUES (?,?)', [usuario.nome, usuario.email]);
    });
}

export async function updateUsuario(req, res) {
    let usuario = req.body
    openDb().then(db => {
        db.run('UPDATE Usuario SET nome=?, email=? WHERE id=?', [usuario.nome, usuario.email, usuario.id]);
    });
}




export async function deleteUsuario(req, res) {
 
    let usuario = req.body.id
    openDb().then(db => {
        db.get('DELETE FROM Usuario WHERE id=?', [usuario])
            .then(usuario => res.json(usuario))
    });
}

