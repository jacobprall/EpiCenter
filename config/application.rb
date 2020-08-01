require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
# require "active_record/railtie"
require 'neo4j/railtie'
# require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
require "rails/test_unit/railtie"
require 'neo4j/core/cypher_session/adaptors/http'


# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Epicentre01
  class Application < Rails::Application

    config.generators do |g|
      g.orm             :neo4j
    end

    # Configure where to connect to the Neo4j DB
    # Note that embedded db is only available for JRuby
    config.neo4j.session.type = :http
    config.neo4j.session.url = 'http://localhost:7474'
    #  config.neo4j.session.options = {faraday_options: { ssl: { verify: true }}}
    #  or
    faraday_configurator = proc do |faraday|
      faraday.adapter :typhoeus
    end
    http_adaptor = Neo4j::Core::CypherSession::Adaptors::HTTP.new('http://neo4j:pass@localhost:7474', faraday_configurator: faraday_configurator)
    # config.neo4j.session.type = :bolt
    # config.neo4j.session.url = 'bolt://localhost:7687'
    #  or
    # config.neo4j.session.type = :embedded
    # config.neo4j.session.path = Rails.root.join('neo4j-db').to_s

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    # config.neo4j.session_type = :http
    # config.neo4j.session_path = "http://localhost:3000"

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
