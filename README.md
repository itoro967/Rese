# Rese - 飲食店予約サービス
## 環境構築
### Dockerビルド
### Laravel環境構築
### 使用技術
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
    unsigned_bigint user_id FK
    unsigned_bigint restaurant_id FK
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
    string area
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
```