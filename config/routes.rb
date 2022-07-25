Rails.application.routes.draw do
  resources :release_genres
  resources :artist_genres
  resources :genres
  get '/releases/q=:search', to: 'releases#index'
  get '/artists/q=:search', to: 'artists#index'
  resources :releases, only: [:show]
  resources :artists, only: [:show]
  # resources :users, only: [:create]


  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
