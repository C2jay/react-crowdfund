export const allProjects = [
    {
        "id": 1,
        "title": "Project one",
        "category": "CK",
        "description": "The first project.",
        "goal": 150,
        "project_image": "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-728x1024.jpg",
        "is_open": true,
        "date_created": "2020-09-11T11:30:51",
        "owner": "admin"
    },
    {
        "id": 2,
        "title": "Project two",
        "category": "CP",
        "description": "The second project.",
        "goal": 200,
        "project_image": "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-728x1024.jpg",
        "is_open": true,
        "date_created": "2020-09-11T11:32:12",
        "owner": "admin"
    },
];



export const oneProject = {
    "id": 1,
    "title": "Project one",
    "category": "CK",
    "description": "The first project.",
    "goal": 150,
    "project_image": "https://via.placeholder.com/300.jpg",
    "is_open": true,
    "date_created": "2020-09-11T11:30:51",
    "owner": "admin",
    "pledges": [
        {
            "id": 1,
            "amount": 50,
            "comment": "cool project",
            "anonymous": false,
            "supporter": "admin",
            "project_id": 1
        },
        {
            "id": 2,
            "amount": 150,
            "comment": "you suck but here's money anyway",
            "anonymous": false,
            "supporter": "admin",
            "project_id": 1
        },
        {
            "id": 3,
            "amount": 50,
            "comment": "BRUZBRUZBRUZ",
            "anonymous": true,
            "supporter": "admin",
            "project_id": 1
        }
    ]
};


