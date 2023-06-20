import { openDb } from '../configDB.js';

export async function createAvaliacoes() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Avaliacoes ( id INTEGER PRIMARY KEY, usuario_id INTEGER, video_id INTEGER , comentario VARCHAR (100) NOT NULL, FOREIGN KEY (usuario_id) REFERENCES Usuario(id), FOREIGN KEY(video_id) REFERENCES Video(id) ) ')
    });
}


export async function selectAvaliacoes(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Avaliacao')
            .then(avaliacoes => res.json(avaliacoes))
    });
}

export async function selectAvaliacao(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Avaliacoes WHERE id=?', [id])
            .then(avaliacoes => res.json(avaliacoes))
    });

}

export async function insertAvaliacao(req, res) {
    let avaliacao = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Usuario (usuario_id,video_id, comentario,) VALUES (?,?, ?)', [avaliacao.usuario_id, avaliacao.video_id, avaliacao.comentario]);
    });

}

export async function deleteAvaliacao(req, res) {

    let avaliacao = req.body.id
    openDb().then(db => {
        db.get('DELETE FROM Avaliacao WHERE id=?', [avaliacao])
            .then(avaliacao => res.json(avaliacao))
    });
}

