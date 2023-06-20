import { openDb } from '../configDB.js';

export async function createVideo() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Video ( id INTEGER PRIMARY KEY, titulo VARCHAR (100) NOT NULL, descricao VARCHAR (100) NOT NULL, url VARCHAR (100) NOT NULL )')
    });
}

export async function selectVideos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Video')
            .then(videos => res.json(videos))
    });
}

export async function selectvideo(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Video WHERE id=?', [id])
            .then(videos => res.json(videos))
    });
}

export async function insertVideo(req, res) {
    let video = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Video (titulo, descricao, url) VALUES (?,?,?)', [video.titulo, video.descricao, video.url]);
    });
}

export async function updateVideo(req, res) {
    let video = req.body
    openDb().then(db => {
        db.run('UPDATE Video SET titulo=?, descricao=?, url=? WHERE id=?', [video.titulo, video.descricao, video.url, video.id]);
    });
}

export async function deleteVideo(req, res) {

    let video = req.body.id
    openDb().then(db => {
        db.get('DELETE FROM Video WHERE id=?', [video])
            .then(video => res.json(video))
    });
}

