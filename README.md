# Rese - 飲食店予約サービス
## 環境構築
### MAC Makefile
1. ```git clone https://github.com/itoro967/Rese.git```
1. ```cd Rese```
1. ```make init```
1. ```docker compose exec php npm run dev```
### 使用技術
- mysql 9.0.1
- nginx 1.27.2
- mailhog latest
- php 8.2-fpm
- Laravel 11
- vite 6.0.11
- React 19.0.0
- tailwind 4.0.15
- inertia 2.0.5

## URL
## 備考

## ルーティング
|パス|内容
|-|-|
|/|飲食店一覧ページ|
|/register|会員登録ページ|
|/thanks|サンクスページ|
|/login|ログインページ|
|/mypage|マイページ|
|/detail/{shop_id}|飲食店詳細ページ|
|/done|予約完了ページ|

## ER図
```mermaid
erDiagram

users ||--o{ favorites:""
restaurants ||--o{ favorites:""
users ||--o{ reservations:""
restaurants ||--o{ reservations:""
genres ||--o{ restaurants:""
areas ||--o{ restaurants:""
users{
    unsigned_bigint id PK
    string name
    string email UK
    string password
    timestamp created_at
    timestamp updated_at
}
favorites{
    unsigned_bigint id PK
    unsigned_bigint user_id FK,UK "組み合わせユニーク"
    unsigned_bigint restaurant_id FK,UK "組み合わせユニーク"
    timestamp created_at
    timestamp updated_at
}
reservations{
    unsigned_bigint id PK
    unsigned_bigint user_id FK
    unsigned_bigint restaurant_id FK
    date date
    time time
    unsigned_tinyint guest_count
    timestamp created_at
    timestamp updated_at
}
restaurants{
    unsigned_bigint id PK
    string name
    unsigned_int area_id FK
    unsigned_int genre_id FK
    text description
    string image_url
    timestamp created_at
    timestamp updated_at
}
genres{
    unsigned_bigint id PK
    string name
    timestamp created_at
    timestamp updated_at
}
areas{
    unsigned_bigint id PK
    string name
    timestamp created_at
    timestamp updated_at
}
```