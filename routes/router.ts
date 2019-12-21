import { Request, Response, NextFunction, Router } from 'express';
import PlayList from '../database/models/playlist.model';

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const lat: PlayList['lat'] = req.body.lat;
  const lng: PlayList['lng'] = req.body.lng;

  const playList: PlayList[] = await PlayList.findAll({
    where: {
      lat,
      lng,
    },
  });
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const title: PlayList['title'] = req.body.title;
  const lat: PlayList['lat'] = req.body.lat;
  const lng: PlayList['lng'] = req.body.lng;

  if (title == undefined || lat == undefined || lng == undefined) {
    res.status(412).json({
      success: false,
      code: 412,
      message: '잘못된 데이터'
    });
  }

  const playList: PlayList = await PlayList.create({
    title,
    lat,
    lng
  });

  res.json({
    success: true,
    data: {
      playList,
    }
  });
});

export default router;