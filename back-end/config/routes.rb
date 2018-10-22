Rails.application.routes.draw do
  
  devise_for :admins, controllers: {  sessions: 'admins/sessions',
                                      passwords: 'admins/passwords' }
  mount RailsAdmin::Engine => '/dashboard', as: 'rails_admin'
end
