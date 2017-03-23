Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :photos, only: [:index]
      resources :followings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :index, :show, :destroy]
    resources :followings, only: [:create, :destroy, :show]
  end

end
