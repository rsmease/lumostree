Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root "react_bridge#root"

  #API namespace pattern that I've learned for passing JBuilder output to Redux action creators
  namespace :api, defaults: {format: JSON} do

    #omitted new because I will handle that with React
    #omitted destroy because it is not mentioned in the specs
    #omitted show because I am only building the index view, for now
    resources :tree_nodes, only: [:index, :create, :update]
  end
end
