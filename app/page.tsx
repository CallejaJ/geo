import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Target, Zap, Brain, BarChart3, Users, CheckCircle } from "lucide-react"

export default function GEOLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GEO</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#que-es" className="text-muted-foreground hover:text-foreground transition-colors">
              ¿Qué es GEO?
            </a>
            <a href="#tecnicas" className="text-muted-foreground hover:text-foreground transition-colors">
              Técnicas
            </a>
            <a href="#plataformas" className="text-muted-foreground hover:text-foreground transition-colors">
              Plataformas
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
              Beneficios
            </a>
            <a href="#casos-uso" className="text-muted-foreground hover:text-foreground transition-colors">
              Casos de Uso
            </a>
            <a href="#implementacion" className="text-muted-foreground hover:text-foreground transition-colors">
              Implementación
            </a>
            <a href="#futuro" className="text-muted-foreground hover:text-foreground transition-colors">
              Futuro
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Comenzar Ahora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          {/* <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">La Nueva Era de Optimización Digital</Badge> */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">GEO: Optimización de</span>
            <br />
            <span className="text-primary">Experiencia Generativa</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            La búsqueda tradicional está perdiendo el 50% de su cuota de mercado para 2028. Las experiencias impulsadas
            por IA como ChatGPT y Perplexity se convierten en la nueva puerta de entrada para el descubrimiento de
            marcas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Descubre GEO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">El Cambio Hacia la IA es Inevitable</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los datos revelan una transformación fundamental en cómo las personas buscan y descubren información
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">58%</div>
                  <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  de búsquedas de Google terminan sin clics
                </div>
                <div className="mt-3 text-xs text-primary/70 font-medium">Búsqueda Zero-Click</div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">300M</div>
                  <div className="w-16 h-1 bg-accent/30 mx-auto rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  usuarios activos semanales en ChatGPT
                </div>
                <div className="mt-3 text-xs text-accent/70 font-medium">Crecimiento Exponencial</div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border hover:border-chart-3/50 transition-all duration-300 hover:shadow-lg hover:shadow-chart-3/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-chart-3 mb-2">40%</div>
                  <div className="w-16 h-1 bg-chart-3/30 mx-auto rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">mejora en visibilidad con GEO</div>
                <div className="mt-3 text-xs text-chart-3/70 font-medium">Ventaja Competitiva</div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border hover:border-chart-4/50 transition-all duration-300 hover:shadow-lg hover:shadow-chart-4/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-chart-4 mb-2">27%</div>
                  <div className="w-16 h-1 bg-chart-4/30 mx-auto rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  tasa de conversión del tráfico de IA
                </div>
                <div className="mt-3 text-xs text-chart-4/70 font-medium">ROI Superior</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                El tráfico de IA convierte 13x mejor que la búsqueda tradicional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is GEO Section */}
      <section id="que-es" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ¿Qué es GEO y cómo revoluciona la optimización tradicional?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La Optimización de Experiencia Generativa representa un cambio fundamental desde la optimización de
              motores de búsqueda tradicional hacia la optimización para motores generativos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Target className="mr-3 h-6 w-6 text-primary" />
                    SEO Tradicional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Clasificar más alto en páginas de resultados</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Optimización de palabras clave y enlaces</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Métricas: Clics y tráfico orgánico</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Brain className="mr-3 h-6 w-6 text-primary" />
                    Marco GEO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-foreground">Visibilidad en respuestas generadas por IA</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-foreground">Optimización de estructura y autoridad</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-foreground">Métricas: Frecuencia de citas en IA</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Techniques Section */}
      <section id="tecnicas" className="py-20 px-4 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Técnicas Probadas con Resultados Cuantificables
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Investigación empírica identifica 9 técnicas centrales de GEO con mejoras de rendimiento demostradas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/90 border-accent/30 hover:border-accent/60 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="h-8 w-8 text-accent" />
                  <Badge className="bg-accent/20 text-accent border-accent/30">+30.6%</Badge>
                </div>
                <CardTitle className="text-lg text-foreground">Adición de Estadísticas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Incorporar estadísticas relevantes y actualizadas de fuentes creíbles mejora la visibilidad en un 30.6%
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-primary/30 hover:border-primary/60 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <Badge className="bg-primary/20 text-primary border-primary/30">+40.9%</Badge>
                </div>
                <CardTitle className="text-lg text-foreground">Adición de Citas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Incluir citas directas de expertos autorizados incrementa la autoridad hasta un 40.9%
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-chart-3/30 hover:border-chart-3/60 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="h-8 w-8 text-chart-3" />
                  <Badge className="bg-chart-3/20 text-chart-3 border-chart-3/30">+21.5%</Badge>
                </div>
                <CardTitle className="text-lg text-foreground">Mejora de Referencias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Agregar referencias de fuentes creíbles con atribución apropiada mejora hasta 21.5%
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-chart-4/30 hover:border-chart-4/60 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Zap className="h-8 w-8 text-chart-4" />
                  <Badge className="bg-chart-4/20 text-chart-4 border-chart-4/30">Óptimo</Badge>
                </div>
                <CardTitle className="text-lg text-foreground">Optimización de Fluidez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mejorar legibilidad y flujo de lenguaje natural para máxima comprensión de IA
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl px-8 py-4">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Las técnicas combinadas pueden lograr mejoras acumulativas de hasta 75% en visibilidad IA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Platforms Section */}
      <section id="plataformas" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Optimización Específica por Plataforma de IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada plataforma de IA tiene características únicas que requieren estrategias de optimización específicas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">300M usuarios</Badge>
                </div>
                <CardTitle className="text-foreground">ChatGPT</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Utiliza datos de entrenamiento y búsqueda en tiempo real
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Estructura conversacional con formato pregunta-respuesta</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">30% mejor recuperación con frases como "Aquí está la información..."</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Permite OAI-SearchBot y GPTBot en robots.txt</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <Badge className="bg-accent/20 text-accent border-accent/30">Tiempo Real</Badge>
                </div>
                <CardTitle className="text-foreground">Perplexity AI</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enfatiza búsqueda web en tiempo real con atribución fuerte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Favorece contenido actualizado en los últimos 30 días</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Requiere arquitectura de autoridad con múltiples referencias</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Permite PerplexityBot para rastreo optimizado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-chart-3/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-chart-3/20 rounded-xl flex items-center justify-center group-hover:bg-chart-3/30 transition-colors">
                    <Target className="h-6 w-6 text-chart-3" />
                  </div>
                  <Badge className="bg-chart-3/20 text-chart-3 border-chart-3/30">Multimodal</Badge>
                </div>
                <CardTitle className="text-foreground">Google Gemini</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Integración profunda con ecosistema Google y Knowledge Graph
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Requiere señales E-E-A-T (Experiencia, Expertise, Autoridad)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Capacidades multimodales: imagen, video y audio</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                    <span className="text-sm text-foreground">Mantener fundación SEO fuerte con marcado JSON-LD</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-chart-3/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Configuración Técnica Universal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-foreground">Robots.txt optimizado para bots IA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-foreground">Renderizado del lado del servidor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-foreground">TTFB bajo 200ms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-foreground">Marcado JSON-LD integral</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Beneficios Empresariales Transformadores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Las empresas que implementan GEO temprano obtienen ventajas significativas de primer movimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-foreground">Ventaja Competitiva</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Posicionamiento monopolístico para empresas que actúan rápidamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mejora en campañas</span>
                    <span className="text-sm font-semibold text-accent">+22%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Citas de medios ganados</span>
                    <span className="text-sm font-semibold text-accent">90%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">ROI Demostrable</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Resultados cuantificables e impacto directo en ingresos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tasa de conversión IA</span>
                    <span className="text-sm font-semibold text-primary">27%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">vs. Búsqueda tradicional</span>
                    <span className="text-sm font-semibold text-muted-foreground">2.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-chart-3 mb-4" />
                <CardTitle className="text-foreground">Alcance de Audiencia</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Acceso a nuevos canales de descubrimiento empresarial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Compradores B2B usan IA</span>
                    <span className="text-sm font-semibold text-chart-3">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Nuevos registros de ChatGPT</span>
                    <span className="text-sm font-semibold text-chart-3">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos-uso" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Casos de Uso Empresariales del Mundo Real
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-accent/10 border-accent/30">
              <CardHeader>
                <CardTitle className="text-accent">Marca de Vehículos Eléctricos (EAU)</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Implementación de inteligencia de ubicación para lanzamiento de tienda pop-up
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Resultados:</div>
                    <div className="text-sm text-muted-foreground">
                      ~5,000 compradores de alta intención identificados
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Impacto:</div>
                    <div className="text-sm text-muted-foreground">$1.3M en ventas con 21 ventas directas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">Empresa Fortune 500 - Servicios Financieros</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Marco GEO estructurado con señales de autoridad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Resultados en 6 semanas:</div>
                    <div className="text-sm text-muted-foreground">32% de leads calificados de plataformas IA</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Impacto:</div>
                    <div className="text-sm text-muted-foreground">Reducción significativa en ciclo de ventas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementacion" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Marco de Implementación Sistemática
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-foreground">Fundación y Evaluación</CardTitle>
                <CardDescription className="text-muted-foreground">Semanas 1-2</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Análisis de estado actual</li>
                  <li>• Prueba de visibilidad de marca</li>
                  <li>• Análisis competitivo</li>
                  <li>• Configuración técnica</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-foreground">Optimización de Contenido</CardTitle>
                <CardDescription className="text-muted-foreground">Semanas 3-6</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Arquitectura "Answer-First"</li>
                  <li>• Contenido basado en intención</li>
                  <li>• Formato para comprensión IA</li>
                  <li>• Estructura conversacional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-chart-3 font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-foreground">Construcción de Autoridad</CardTitle>
                <CardDescription className="text-muted-foreground">Semanas 4-8</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Estrategia de artículos de lista</li>
                  <li>• Inclusión en directorios</li>
                  <li>• Menciones de relaciones públicas</li>
                  <li>• Construcción de citas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future of GEO Section */}
      <section id="futuro" className="py-20 px-4 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              El Futuro del GEO: Tendencias y Oportunidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proyecciones del mercado y evolución tecnológica que definirán el panorama digital de los próximos años
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                    Crecimiento del Mercado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$7.3B</div>
                    <div className="text-sm text-muted-foreground mb-4">Mercado proyectado para 2031</div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">34% CAGR desde 2024</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-card/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">95%</div>
                      <div className="text-xs text-muted-foreground">Empresas usando IA para 2028</div>
                    </div>
                    <div className="text-center p-4 bg-card/50 rounded-lg">
                      <div className="text-2xl font-bold text-chart-3">1%</div>
                      <div className="text-xs text-muted-foreground">Cuota de mercado ChatGPT 2025</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/80 border-border">
                <CardHeader>
                  <CardTitle className="text-accent flex items-center">
                    <Brain className="mr-3 h-6 w-6 text-accent" />
                    Evolución Tecnológica
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-accent">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Optimización Multimodal</div>
                      <div className="text-sm text-muted-foreground">Contenido que abarca texto, imágenes, video y audio simultáneamente</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Integración RAG</div>
                      <div className="text-sm text-muted-foreground">Datos en tiempo real como piedra angular de la estrategia GEO</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-chart-3/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-chart-3">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Optimización por Entidades</div>
                      <div className="text-sm text-muted-foreground">Cambio de palabras clave a optimización basada en entidades</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <Card className="bg-gradient-to-r from-chart-3/10 to-chart-4/10 border-chart-3/30">
              <CardHeader>
                <CardTitle className="text-center text-foreground">Factores Críticos de Éxito para 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-chart-3" />
                    </div>
                    <div className="font-semibold text-sm text-foreground">Construcción de Autoridad</div>
                    <div className="text-xs text-muted-foreground mt-1">Credibilidad y citas expertas</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-semibold text-sm text-foreground">Infraestructura Técnica</div>
                    <div className="text-xs text-muted-foreground mt-1">Arquitectura lista para IA</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="font-semibold text-sm text-foreground">Diversificación</div>
                    <div className="text-xs text-muted-foreground mt-1">Optimización multiformato</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-chart-4/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="h-6 w-6 text-chart-4" />
                    </div>
                    <div className="font-semibold text-sm text-foreground">Adaptación</div>
                    <div className="text-xs text-muted-foreground mt-1">Optimización continua</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="h-6 w-6 text-chart-3" />
                    </div>
                    <div className="font-semibold text-sm text-foreground">Desarrollo de Entidad</div>
                    <div className="text-xs text-muted-foreground mt-1">Presencia en Knowledge Graph</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-chart-3/20 rounded-2xl p-8 border border-primary/30">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">Perspectiva de Expertos</h3>
                <blockquote className="text-lg text-muted-foreground italic mb-4">
                  "GEO es la competencia para entrar en la mente del modelo. En un mundo donde la IA es la puerta de entrada al comercio y descubrimiento, la pregunta para los mercadólogos es: ¿Te recordará el modelo?"
                </blockquote>
                <cite className="text-sm font-medium text-primary">— Andreessen Horowitz</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              El Futuro del Descubrimiento Digital es Ahora
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              2025 es un año crítico para establecer tu posición en el ecosistema de búsqueda dirigido por IA. Las
              empresas que implementen GEO ahora capturarán posiciones dominantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Zap className="mr-2 h-5 w-5" />
                Comenzar con GEO
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">GEO</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Optimización de Experiencia Generativa para el futuro del descubrimiento digital.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Auditoría GEO</li>
                <li>Implementación</li>
                <li>Consultoría</li>
                <li>Capacitación</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentación</li>
                <li>Casos de Estudio</li>
                <li>Blog</li>
                <li>Webinars</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@geo-optimization.com</li>
                <li>+1 (555) 123-4567</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 GEO - Optimización de Experiencia Generativa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}