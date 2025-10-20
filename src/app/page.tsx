'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Star, CheckCircle, Users, Clock, Shield, UserCheck, Headphones, DollarSign, Package } from 'lucide-react'

export default function OnmaxLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const whatsappUrl = "https://api.whatsapp.com/send?phone=551150216868"

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Onmax Assessoria
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection('avaliacoes')} className="text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                  Avaliações
                </button>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  Fale Conosco
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                Serviços
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('avaliacoes')} className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
                Avaliações
              </button>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-full text-center hover:from-orange-500 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Onmax Assessoria
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
                Sua solução completa em assessoria empresarial. Terceirizamos serviços essenciais para você focar no que realmente importa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Solicitar Orçamento
                </a>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="border-2 border-orange-400 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
                >
                  Nossos Serviços
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Missão</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Simplificar sua gestão empresarial oferecendo serviços terceirizados com excelência, agilidade e transparência.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agilidade</h3>
              <p className="text-gray-600">Processos rápidos e eficientes para economizar seu tempo.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confiança</h3>
              <p className="text-gray-600">Transparência total em todos os nossos processos.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Atendimento</h3>
              <p className="text-gray-600">Suporte personalizado do início ao fim do processo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Oferecemos uma gama completa de serviços terceirizados para atender todas as suas necessidades empresariais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secretárias Virtuais</h3>
              <p className="text-gray-600 mb-4">Terceirizar a parte de secretariado é uma prática muito comum entre profissionais da saúde, isso permite otimizar o tempo do próprio profissional, garantindo um atendimento de qualidade e atender os cliente e/ou pacientes de forma exclusivamente dedicada para esta função.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Atendimento especializado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Otimização de tempo
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefonistas</h3>
              <p className="text-gray-600 mb-4">A terceirização dessa atividade permite que a empresa tenha profissionais dedicados a atender chamadas telefônicas, filtrar ligações e direcioná-las adequadamente, proporcionando um serviço eficiente e de qualidade.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Atendimento dedicado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Filtragem inteligente
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestão de Pessoas</h3>
              <p className="text-gray-600 mb-4">A terceirização da gestão de pessoas engloba atividades relacionadas ao recrutamento, seleção, admissão, treinamento e desenvolvimento de colaboradores. Isso permite que a empresa tenha acesso a profissionais experientes, garantindo uma equipe qualificada e reduzindo a carga de trabalho do setor de recursos humanos.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Recrutamento especializado
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Equipe qualificada
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finanças</h3>
              <p className="text-gray-600 mb-4">Terceirizar atividades financeiras, como controle de contas a pagar e a receber, emissão de notas fiscais e conciliação bancária, possibilita uma gestão mais eficiente dos recursos financeiros da empresa e a garantia de conformidade com as obrigações fiscais e legais.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Gestão eficiente
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Conformidade fiscal
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Logística</h3>
              <p className="text-gray-600 mb-4">A terceirização da logística envolve atividades como gerenciamento de estoque, transporte e distribuição de mercadorias, o que permite que a empresa reduza custos, otimize processos e obtenha maior agilidade na cadeia de suprimentos.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Redução de custos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Maior agilidade
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">clientes dizem</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Veja os depoimentos de quem já confia na Onmax Assessoria.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Excelente atendimento! A secretária virtual da Onmax otimizou completamente minha agenda médica. Super recomendo!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Maria Silva</p>
                  <p className="text-sm text-gray-600">Cliente desde 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "A gestão financeira terceirizada revolucionou nossa empresa. Agora posso focar no crescimento do negócio."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-900">João Santos</p>
                  <p className="text-sm text-gray-600">Cliente desde 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "O serviço de telefonistas é impecável. Nossos clientes sempre elogiam o atendimento profissional!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Costa</p>
                  <p className="text-sm text-gray-600">Cliente desde 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avaliacoes" className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossas <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Avaliações</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Números que comprovam nossa excelência no atendimento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4.9</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Avaliação Média</h3>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">Baseado em 500+ avaliações</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfação</h3>
              <p className="text-gray-600">Clientes satisfeitos com nossos serviços</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24h</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tempo Médio</h3>
              <p className="text-gray-600">Para implementação de serviços</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anos</h3>
              <p className="text-gray-600">De experiência no mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Receba dicas importantes sobre gestão empresarial e fique informado sobre nossos novos serviços.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Inscrever-se
                </button>
              </div>
              <p className="text-sm text-orange-100 mt-4">
                Não enviamos spam. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Onmax Assessoria
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Sua solução completa em serviços terceirizados. Cuidamos da gestão para você focar no que realmente importa.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-full hover:from-emerald-500 hover:to-teal-600 transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">(11) 5021-6868</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">contato@onmax.top</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-1" />
                  <div className="text-gray-300">
                    <p>Estrada Dos Tres Rios 243 Loja: A</p>
                    <p>Freguesia (Jacarepaguá)</p>
                    <p>Rio de Janeiro RJ</p>
                    <p>22755-002</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Secretárias Virtuais</li>
                <li>Telefonistas</li>
                <li>Gestão de Pessoas</li>
                <li>Finanças</li>
                <li>Logística</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Onmax Assessoria. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                CNPJ: 22.331.901/0001-07
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}