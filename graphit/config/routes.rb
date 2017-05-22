Rails.application.routes.draw do



  root to: 'static_pages#show'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :tables, only: [:create, :destroy, :index, :show]
    resources :graphs, only: [:create, :destroy, :index, :show]
    resources :shares, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
