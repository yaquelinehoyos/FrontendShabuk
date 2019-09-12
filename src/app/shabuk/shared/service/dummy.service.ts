import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DummyService {

    getUserLocalBooks(): Promise<any[]>{

        return new Promise((resolve,reject)=>{
            resolve([
                {
                    "id": 7,
                    "name": "libro 1",
                    "edition": null,
                    "description": null,
                    "authors": [
                        {
                            "id": 7,
                            "full_name": "aaaaa"
                        }
                    ],
                    "state": {
                        "id": 1,
                        "name": "En biblioteca",
                        "description": "El libro se encuentra en la biblioteca del usuario (no disponible para el público)"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": []
                },
                {
                    "id": 47,
                    "name": "libro 11",
                    "edition": "1",
                    "description": "book 9",
                    "authors": [
                        {
                            "id": 58,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 59,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 1,
                        "name": "En biblioteca",
                        "description": "El libro se encuentra en la biblioteca del usuario (no disponible para el público)"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": []
                },
                {
                    "id": 48,
                    "name": "libro 11",
                    "edition": "1",
                    "description": "book 9",
                    "authors": [
                        {
                            "id": 60,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 61,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 1,
                        "name": "En biblioteca",
                        "description": "El libro se encuentra en la biblioteca del usuario (no disponible para el público)"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": []
                },
                {
                    "id": 49,
                    "name": "1234",
                    "edition": "1",
                    "description": "descripción 113",
                    "authors": [
                        {
                            "id": 5,
                            "full_name": "Autor 3"
                        },
                        {
                            "id": 64,
                            "full_name": "Victor Cardona"
                        },
                        {
                            "id": 84,
                            "full_name": "Juan Marín"
                        }
                    ],
                    "state": {
                        "id": 1,
                        "name": "En biblioteca",
                        "description": "El libro se encuentra en la biblioteca del usuario (no disponible para el público)"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": []
                },
                {
                    "id": 35,
                    "name": "libro 1",
                    "edition": null,
                    "description": null,
                    "authors": [
                        {
                            "id": 35,
                            "full_name": "aaaaa"
                        }
                    ],
                    "state": {
                        "id": 1,
                        "name": "En biblioteca",
                        "description": "El libro se encuentra en la biblioteca del usuario (no disponible para el público)"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": [
                        {
                            "uploaded_at": "2019-08-11 03:37 PM",
                            "file": "http://127.0.0.1:8000/media/books/sci-white_PqKoeib.png",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        }
                    ]
                },
                {
                    "id": 52,
                    "name": "libro 11",
                    "edition": "1",
                    "description": "book 9",
                    "authors": [
                        {
                            "id": 80,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 81,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 1,
                        "name": "En biblioteca",
                        "description": "El libro se encuentra en la biblioteca del usuario (no disponible para el público)"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": []
                }
            ])
        });
    }

    getUserPublicBooks(): Promise<any[]>{

        return new Promise((resolve,reject)=>{
            resolve([
                {
                    "id": 50,
                    "name": "libro 11",
                    "edition": "1",
                    "description": "book 9",
                    "authors": [
                        {
                            "id": 76,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 77,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 2,
                        "name": "En transferencia",
                        "description": "El libro se encuentra disponible para el público"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": []
                },
                {
                    "id": 51,
                    "name": "libro 11",
                    "edition": "1",
                    "description": "book 9",
                    "authors": [
                        {
                            "id": 78,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 79,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 2,
                        "name": "En transferencia",
                        "description": "El libro se encuentra disponible para el público"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": []
                },
                {
                    "id": 42,
                    "name": "libro 111",
                    "edition": "111",
                    "description": "descripción 112",
                    "authors": [
                        {
                            "id": 5,
                            "full_name": "Autor 3"
                        },
                        {
                            "id": 65,
                            "full_name": "Juan Marín"
                        },
                        {
                            "id": 64,
                            "full_name": "Victor Cardona"
                        }
                    ],
                    "state": {
                        "id": 2,
                        "name": "En transferencia",
                        "description": "El libro se encuentra disponible para el público"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": [
                        {
                            "uploaded_at": "2019-08-12 06:16 PM",
                            "file": "http://127.0.0.1:8000/media/books/sci-white_45azcBg.png",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        },
                        {
                            "uploaded_at": "2019-08-12 06:16 PM",
                            "file": "http://127.0.0.1:8000/media/books/WhatsApp_Image_2019-08-05_at_12.08.02_AM_rajWLyM.jpeg",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        }
                    ]
                },
                {
                    "id": 36,
                    "name": "libro 3",
                    "edition": "1",
                    "description": "book 3",
                    "authors": [
                        {
                            "id": 36,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 37,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 2,
                        "name": "En transferencia",
                        "description": "El libro se encuentra disponible para el público"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": [
                        {
                            "uploaded_at": "2019-08-11 03:45 PM",
                            "file": "http://127.0.0.1:8000/media/books/sci-white_uLTXfEY.png",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        },
                        {
                            "uploaded_at": "2019-08-11 03:45 PM",
                            "file": "http://127.0.0.1:8000/media/books/WhatsApp_Image_2019-08-05_at_12.08.02_AM.jpeg",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        }
                    ]
                },
                {
                    "id": 37,
                    "name": "libro 3",
                    "edition": "1",
                    "description": "book 3",
                    "authors": [
                        {
                            "id": 38,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 39,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 2,
                        "name": "En transferencia",
                        "description": "El libro se encuentra disponible para el público"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": [
                        {
                            "uploaded_at": "2019-08-11 03:50 PM",
                            "file": "http://127.0.0.1:8000/media/books/sci-white_oY6RFjq.png",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        },
                        {
                            "uploaded_at": "2019-08-11 03:50 PM",
                            "file": "http://127.0.0.1:8000/media/books/WhatsApp_Image_2019-08-05_at_12.08.02_AM_73WLW7d.jpeg",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        }
                    ]
                },
                {
                    "id": 40,
                    "name": "libro 5",
                    "edition": "1",
                    "description": "book 5",
                    "authors": [
                        {
                            "id": 44,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 45,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 2,
                        "name": "En transferencia",
                        "description": "El libro se encuentra disponible para el público"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": [
                        {
                            "uploaded_at": "2019-08-12 06:08 PM",
                            "file": "http://127.0.0.1:8000/media/books/sci-white_9ycuhBa.png",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        },
                        {
                            "uploaded_at": "2019-08-12 06:08 PM",
                            "file": "http://127.0.0.1:8000/media/books/WhatsApp_Image_2019-08-05_at_12.08.02_AM_rrpfBXO.jpeg",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        }
                    ]
                },
                {
                    "id": 41,
                    "name": "libro 6",
                    "edition": "1",
                    "description": "book 6",
                    "authors": [
                        {
                            "id": 46,
                            "full_name": "autor 1"
                        },
                        {
                            "id": 47,
                            "full_name": "autor 2"
                        }
                    ],
                    "state": {
                        "id": 2,
                        "name": "En transferencia",
                        "description": "El libro se encuentra disponible para el público"
                    },
                    "initial_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "current_owner": {
                        "id": 1,
                        "email": "valonso.cardona@udea.edu.co"
                    },
                    "images_list": [
                        {
                            "uploaded_at": "2019-08-12 06:15 PM",
                            "file": "http://127.0.0.1:8000/media/books/sci-white_8wb8WQN.png",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        },
                        {
                            "uploaded_at": "2019-08-12 06:15 PM",
                            "file": "http://127.0.0.1:8000/media/books/WhatsApp_Image_2019-08-05_at_12.08.02_AM_TkTrBDM.jpeg",
                            "user": {
                                "id": 1,
                                "email": "valonso.cardona@udea.edu.co"
                            }
                        }
                    ]
                }
            ])
        });
    }
}
