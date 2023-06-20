import { Router } from "express";

import { createUsuario, insertUsuario, updateUsuario, selectUsuarios, selectUsuario, deleteUsuario } from './Controller/usuario.js'
import { createVideo, selectVideos, selectvideo, insertVideo, updateVideo, deleteVideo } from './Controller/video.js'
import { createAvaliacoes, selectAvaliacoes, selectAvaliacao, insertAvaliacao, deleteAvaliacao }  from './Controller/avaliacoes.js'

const router = Router();

router.get("/", (res) => {
    res.json({
        "statusCode": 200,
        "mensagem": "Api rodando"
    })
});
createUsuario();
createVideo();
createAvaliacoes();

router.get('/usuarios', selectUsuarios);
router.get('/usuario', selectUsuario);
router.post('/usuario', insertUsuario);
router.put('/usuario', updateUsuario);
router.delete('/usuario', deleteUsuario);

router.get('/videos', selectVideos);
router.get('/video', selectvideo);
router.post('/video', insertVideo);
router.put('/video', updateVideo);
router.delete('/video', deleteVideo);

router.get('/avaliacoes', selectAvaliacoes);
router.get('/avaliacao', selectAvaliacao);
router.post('/avaliacao', insertAvaliacao);
router.delete('/avaliacao', deleteAvaliacao);




export default router;
