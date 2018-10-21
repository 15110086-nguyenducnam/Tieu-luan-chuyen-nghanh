Rails.application.routes.draw do
  devise_for :admins, controllers: {  sessions: 'admins/sessions',
                                      passwords: 'admins/passwords' }
  mount RailsAdmin::Engine => '/dashboard', as: 'rails_admin'
    
  # namespace :admins, path: 'admin' do
  #   root to: "dashboard#index"    
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
