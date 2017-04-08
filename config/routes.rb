Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do

    scope '/users' do
      post 'auth' => 'authentication#authenticate_user'
      post 'create' => 'authentication#create_user'
    end

    resources :industries do
      resources :companies do
        resources :metrics
      end
    end

    resources :companies
end


  # TODO: Devise requires root_url to be defined as *something*. Change as necessary.
  get 'home' => 'home#index'
  root to: "home#index"
end
