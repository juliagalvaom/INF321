defmodule HelloWeb.HelloController do
  use HelloWeb, :controller

  def saudacao(conn, %{"lang" => "pt", "name" => name}) do
    render(conn, :saudacao, saudacao: "Olá", name: name)
  end

  def saudacao(conn, %{"lang" => "en", "name" => name}) do
    render(conn, :saudacao, saudacao: "Hello", name: name)
  end
end