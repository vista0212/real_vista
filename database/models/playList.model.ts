import { Model, DataTypes, HasMany } from 'sequelize';

import { sequelize } from '../index';

export default class PlayList extends Model<PlayList> {
  public static associations: {
    songs: HasMany<PlayList, Song>;
  }

  public readonly songs: Song[];

  public pk: number;
  public title: string;
  public lat: number;
  public lng: number;
  public background: string;
}

PlayList.init({
  pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  lng: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  background: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'playLists',
});

import Song from './song.model';

PlayList.hasMany(Song, {
  sourceKey: 'pk',
  foreignKey: 'playList_pk',
  as: 'song',
});