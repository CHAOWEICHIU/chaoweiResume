Rails.application.routes.draw do
  get '/resume' => 'resumes#resume'
  get '/rethinkrobotic' => 'resumes#rethinkrobotic'
  
  root 'resumes#resume'
end
