## BreedPop

#Restful Api

* POST {김경백ip}/api/playlist ( playlist 생성 )

> Parmas

    title : {type: String}, // 플레이리스트 제목
    
    lat : {type : double}, // 위도
    
    lng : {type : double}, // 경도
    
    background : {type : String}, // 플레이리스트 배경 색

> Response

    HTTP 200 : 
    {
      "success": true,
      "data": {
        "playList": {
          "pk": 1,
          "title": "asdf",
          "lat": "31.12312",
          "lng": "12.23123",
          "background": "#123122",
          "updatedAt": "2019-12-21T15:30:17.809Z",
          "createdAt": "2019-12-21T15:30:17.809Z"
        }
      }
    }

    HTTP 412 : 
    {
      "success": false,
      "code": 412,
      "message": "잘못된 데이터"
    }
    
* GET {김경백ip}/api/playlist ( playlist 보기 )

> Parmas
    
    lat : {type : double}, // 위도
    
    lng : {type : double}, // 경도

> Response

    HTTP 200 : 
    {
      "success": true,
      "data": {
        "playList": [
          {
            "pk": 1,
            "title": "asdf",
            "lat": 31.12312,
            "lng": 12.23123,
            "background": "12.51223",
            "createdAt": "2019-12-21T16:23:22.000Z",
            "updatedAt": "2019-12-21T16:23:22.000Z"
          },
          {
            "pk": 2,
            "title": "asdf",
            "lat": 31.12312,
            "lng": 12.23123,
            "background": "12.51223",
            "createdAt": "2019-12-21T16:23:23.000Z",
            "updatedAt": "2019-12-21T16:23:23.000Z"
          },
          {
            "pk": 3,
            "title": "asdf",
            "lat": 31.12312,
            "lng": 12.23123,
            "background": "12.51223",
            "createdAt": "2019-12-21T16:23:24.000Z",
            "updatedAt": "2019-12-21T16:23:24.000Z"
          }
        ]
      }
    }

    HTTP 412 : {
      "success": false,
      "code": 412,
      "message": "잘못된 데이터"
    }

    

* GET {김경백ip}/api/playlist/video ( playlist 비디오 목록 )

> Params

    playList_pk : { type : Integer } // 플레이리스트 pk

> Response

    HTTP 200 : 
    {
      "success": true,
      "data": {
        "playList": {
          "title": "asdf",
          "songs": [
            {
              "pk": 11,
              "playList_pk": 11,
              "video_title": "노래",
              "video_id": "adfkal123012"
            },
            {
              "pk": 12,
              "playList_pk": 12,
              "video_title": "노래",
              "video_id": "adfkal123012"
            }
          ]
        }
      }
    }

    HTTP 412 : 
    {
      "success": false,
      "code": 412,
      "message": "잘못된 데이터"
    }


* POST {김경백ip}/api/playlist/video ( 플레이리스트 비디오 추가 )

> Params

    playList_pk {type: Integer}     // 플레이리스트 pk
    
    title {type: String}            // 비디오 제목
    
    video_id {type: String}         // 비디오 id
    
> Response

    HTTP 200 : 
    {
      "success": true,
      "data": {
        "video": {
          "pk": 13,
          "playList_pk": "14",
          "title": "노래",
          "video_id": "adf123daf",
          "updatedAt": "2019-12-21T17:15:30.056Z",
          "createdAt": "2019-12-21T17:15:30.056Z"
        }
      }
    }
    
    HTTP 412 : {
      "success": false,
      "code": 412,
      "message": "잘못된 데이터"
    }
