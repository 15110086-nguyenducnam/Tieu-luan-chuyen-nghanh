RailsAdmin.config do |config|

  ### Popular gems integration

  # # == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :admin
  end
  config.current_user_method(&:current_admin)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  # config.model 'Chitiethopdongcc' do
  #   label 'Chi tiet hop dong' # Change the label of this model class
  #   field :id
  #   field :soluong do
  #     label 'So luong'
  #   end
  #   field :dongia do
  #     label '' # Change the label of this field
  #   end
  # end
  # config.model 'sanpham' do
  #   label 'Item' # Change the label of this model class
  #   field :id
  #   # field :design_code
  #   # field :brand do
  #   #   label 'Company' # Change the label of this field
  #   # end
  #   # field :is_hidden
  #   # field :filename
  # end
  config.main_app_name = ["Zeny", "Admin"]
  config.label_methods.unshift(:display_name)
  config.model 'Chitiethdccs' do
    label "fsfsdfs"
    label_plural "Chi tiết hợp đồng cung cấp"
  end

  # config.model 'Admin' do
  #   label "Tài khoản"
  #   label_plural "Admin"
  # end


  # config.model 'Chitietdhmuahangs' do
  #   label "Hợp đồng"
  #   label_plural "Chi tiết hợp đồng mua hàng"
  # end
  #
  # config.model 'Banggia' do
  #   label ""
  #   label_plural "Bảng giá"
  # end
  config.model 'Admin' do
    visible false
  end
end
