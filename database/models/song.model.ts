import { Model, DataTypes, BelongsTo } from 'sequelize';

import { sequelize } from '../index';

export default class Song extends Model<Song> {
  public static associations: {
    playList: BelongsTo<Song, PlayList>;
  }

  public pk: number;
  public playList_pk: PlayList['pk'];
  public title: string;
  public video_id: string;
}

Song.init({
  pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  playList_pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  video_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'songs',
});

import PlayList from './playlist.model';

Song.belongsTo(PlayList, {
  foreignKey: 'playList_pk',
  as: 'playList',
});