Rails.application.routes.draw do
  resources :release_reviews, only: [:create, :destroy]
  get '/me/release_reviews', to: 'release_reviews#index'

  resources :favorite_releases, only: [:create, :destroy]
  get '/me/favorite_releases', to: 'favorite_releases#index'

  resources :favorite_artists, only: [:create, :destroy]
  get '/me/favorite_artists', to: 'favorite_artists#index'

  resources :release_saves, only: [:create, :destroy]
  get '/me/saved_releases', to: 'release_saves#index'
  # resources :release_genres
  # resources :artist_genres
  # resources :genres
  get '/releases/q=:search', to: 'releases#index'
  get '/artists/q=:search', to: 'artists#index'
  resources :releases, only: [:show]
  resources :artists, only: [:show]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
