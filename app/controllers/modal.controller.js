// open modal dialog
angular.module("socialNetwork").controller('OpenModalCtrl', function ($scope, Lightbox) {
    'use strict';
    $scope.Lightbox = Lightbox;

    console.log(Lightbox);

    console.log($scope);
    $scope.avatars = [{
        'url': '/src/img/avatar.jpg',
        'likes': 1,
        'senderName': 'Містер Андерсон',
        'senderUrl': '/src/img/users/user1/avatar.jpg',
        'recieverUrl': '/src/img/users/user4/d93361ffaed234.jpg',
        'date': '15.12.12 15:38',
        'posts': [ 
             {
                'postSenderUrl': '/src/img/users/user2/hqdefault.jpg',
                'postImage': '/src/img/gallery/10.jpg',
                'postSenderName': 'Таісія Повалій',
                'postContent': '',
                'postDate': '01.05.11 01:20',
                'postLikes': 23
            },
             {
                'postSenderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
                'postImage': '/src/img/gallery/9.jpg',
                'postSenderName': 'Діма Монатік',
                'postContent': '',
                'postDate': '01.07.17 15:23',
                'postLikes': 2322
            }
        ]
    }];
    $scope.gallery = [{
            'url': '/src/img/gallery/1.jpg',
            'likes': 1,
            'senderName': 'Містер Сміт',
            'senderUrl': '/src/img/users/user1/avatar.jpg',
            'recieverUrl': '/src/img/users/user4/d93361ffaed234.jpg',
            'date': '15.12.12 15:38',
            'posts': [
                     {
                    'postSenderUrl': '/src/img/users/user2/hqdefault.jpg',
                    'postImage': '/src/img/gallery/8.jpg',
                    'postSenderName': 'Таісія Повалій',
                    'postContent': '',
                    'postDate': '01.05.11 01:20',
                    'postLikes': 23
                },
                 {
                    'postSenderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
                    'postImage': '/src/img/gallery/7.jpg',
                    'postSenderName': 'Діма Монатік',
                   'postContent': '',
                    'postDate': '01.07.17 15:23',
                    'postLikes': 2322
                }
            ]
        },
        {
            'url': '/src/img/gallery/2.jpg',
            'likes': 5,
            'senderName': 'Містер Андерсон',
            'senderUrl': '/src/img/users/user2/hqdefault.jpg',
            'recieverUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'date': '11.13.02 12:45',
            'posts': [
                     {
                    'postSenderUrl': '/src/img/users/user1/avatar.jpg',
                    'postImage': '/src/img/gallery/6.jpg',
                    'postSenderName': 'Трініті',
                   'postContent': '',
                    'postDate': '06.09.12 04:21',
                    'postLikes': 15
                },
                 {
                    'postSenderUrl': '/src/img/users/user1/avatar.jpg',
                    'postImage': '/src/img/gallery/5.jpg',
                    'postSenderName': 'Гендальф Сірий',
                    'postContent': '',
                    'postDate': '06.01.37 14:53',
                    'postLikes': 100
                }
            ]
        },
        {
            'url': '/src/img/gallery/3.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/5.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/4.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/5.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/5.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/3.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/6.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/1.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/7.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/2.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/8.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/8.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/9.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/6.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/10.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/4.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/11.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/2.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/12.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/12.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        },
        {
            'url': '/src/img/gallery/13.jpg',
            'likes': 1000,
            'senderName': 'Містер Фродо',
            'senderUrl': '/src/img/users/user3/Rachel_McAdams_5.jpg',
            'recieverUrl': '/src/img/users/user1/avatar.jpg',
            'date': '11.12.13 15:11',
            'posts': [
                    {
                    'postSenderUrl': '/src/img/users/user4/d93361ffaed234.jpg',
                    'postImage': '/src/img/gallery/11.jpg',
                    'postSenderName': 'Сем Уітвікі',
                    'postContent': '',
                    'postDate': '11.04.06 23:2',
                    'postLikes': 1
                   }
            ]
        }

    ];

    $scope.openAvatar = function (index) {
        Lightbox.openModal($scope.avatars, index);
    };
    $scope.openGallery = function (index) {
        Lightbox.openModal($scope.gallery, index);
    };
});
angular.module('socialNetwork').config(function (LightboxProvider) {
    LightboxProvider.templateUrl = '/app/templates/modal.html';


});


// swapping blocks in modal window
angular.module("socialNetwork").controller('ModalCtrl', function ($scope) {
    $scope.toogleClass = function (class1) {
        $scope[class1] = !$scope[class1];
    };
});

