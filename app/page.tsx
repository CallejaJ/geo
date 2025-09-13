import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Brain,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react";

export default function GEOLandingPage() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Brain className='h-8 w-8 text-primary' />
            <span className='text-2xl font-bold text-foreground'>GEO</span>
          </div>
          <nav className='hidden md:flex items-center space-x-6'>
            <a
              href='#que-es'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              ¿Qué es GEO?
            </a>
            <a
              href='#beneficios'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Beneficios
            </a>
            <a
              href='#casos-uso'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Casos de Uso
            </a>
            <a
              href='#implementacion'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Implementación
            </a>
          </nav>
          <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
            Comenzar Ahora
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-balance'>
            <span className='text-foreground'>GEO: Optimización de</span>
            <br />
            <span className='text-primary'>Experiencia Generativa</span>
          </h1>
          <p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty'>
            La búsqueda tradicional está perdiendo el 50% de su cuota de mercado
            para 2028. Las experiencias impulsadas por IA como ChatGPT y
            Perplexity se convierten en la nueva puerta de entrada para el
            descubrimiento de marcas.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-primary hover:bg-primary/90 text-primary-foreground'
            >
              Descubre GEO
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-primary text-primary hover:bg-primary/10 bg-transparent'
            >
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 px-4 bg-gradient-to-b from-card/30 to-background'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
              El Cambio Hacia la IA es Inevitable
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Los datos revelan una transformación fundamental en cómo las
              personas buscan y descubren información
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card className='bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10'>
              <CardContent className='p-6 text-center'>
                <div className='mb-4'>
                  <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                    58%
                  </div>
                  <div className='w-16 h-1 bg-primary/30 mx-auto rounded-full'></div>
                </div>
                <div className='text-sm text-muted-foreground leading-relaxed'>
                  de búsquedas de Google terminan sin clics
                </div>
                <div className='mt-3 text-xs text-primary/70 font-medium'>
                  Búsqueda Zero-Click
                </div>
              </CardContent>
            </Card>

            <Card className='bg-card/80 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10'>
              <CardContent className='p-6 text-center'>
                <div className='mb-4'>
                  <div className='text-4xl md:text-5xl font-bold text-accent mb-2'>
                    300M
                  </div>
                  <div className='w-16 h-1 bg-accent/30 mx-auto rounded-full'></div>
                </div>
                <div className='text-sm text-muted-foreground leading-relaxed'>
                  usuarios activos semanales en ChatGPT
                </div>
                <div className='mt-3 text-xs text-accent/70 font-medium'>
                  Crecimiento Exponencial
                </div>
              </CardContent>
            </Card>

            <Card className='bg-card/80 border-border hover:border-chart-3/50 transition-all duration-300 hover:shadow-lg hover:shadow-chart-3/10'>
              <CardContent className='p-6 text-center'>
                <div className='mb-4'>
                  <div className='text-4xl md:text-5xl font-bold text-chart-3 mb-2'>
                    40%
                  </div>
                  <div className='w-16 h-1 bg-chart-3/30 mx-auto rounded-full'></div>
                </div>
                <div className='text-sm text-muted-foreground leading-relaxed'>
                  mejora en visibilidad con GEO
                </div>
                <div className='mt-3 text-xs text-chart-3/70 font-medium'>
                  Ventaja Competitiva
                </div>
              </CardContent>
            </Card>

            <Card className='bg-card/80 border-border hover:border-chart-4/50 transition-all duration-300 hover:shadow-lg hover:shadow-chart-4/10'>
              <CardContent className='p-6 text-center'>
                <div className='mb-4'>
                  <div className='text-4xl md:text-5xl font-bold text-chart-4 mb-2'>
                    27%
                  </div>
                  <div className='w-16 h-1 bg-chart-4/30 mx-auto rounded-full'></div>
                </div>
                <div className='text-sm text-muted-foreground leading-relaxed'>
                  tasa de conversión del tráfico de IA
                </div>
                <div className='mt-3 text-xs text-chart-4/70 font-medium'>
                  ROI Superior
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='mt-12 text-center'>
            <div className='inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3'>
              <TrendingUp className='h-4 w-4 text-accent' />
              <span className='text-sm font-medium text-foreground'>
                El tráfico de IA convierte 13x mejor que la búsqueda tradicional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What is GEO Section */}
      <section id='que-es' className='py-20 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-foreground'>
              ¿Qué es GEO y cómo revoluciona la optimización tradicional?
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              La Optimización de Experiencia Generativa representa un cambio
              fundamental desde la optimización de motores de búsqueda
              tradicional hacia la optimización para motores generativos.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <Card className='bg-card border-border'>
                <CardHeader>
                  <CardTitle className='flex items-center text-foreground'>
                    <Target className='mr-3 h-6 w-6 text-primary' />
                    SEO Tradicional
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-muted-foreground rounded-full mt-2'></div>
                    <span className='text-muted-foreground'>
                      Clasificar más alto en páginas de resultados
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-muted-foreground rounded-full mt-2'></div>
                    <span className='text-muted-foreground'>
                      Optimización de palabras clave y enlaces
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-muted-foreground rounded-full mt-2'></div>
                    <span className='text-muted-foreground'>
                      Métricas: Clics y tráfico orgánico
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className='bg-primary/10 border-primary/30'>
                <CardHeader>
                  <CardTitle className='flex items-center text-primary'>
                    <Brain className='mr-3 h-6 w-6 text-primary' />
                    Marco GEO
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-accent mt-0.5' />
                    <span className='text-foreground'>
                      Visibilidad en respuestas generadas por IA
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-accent mt-0.5' />
                    <span className='text-foreground'>
                      Optimización de estructura y autoridad
                    </span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-accent mt-0.5' />
                    <span className='text-foreground'>
                      Métricas: Frecuencia de citas en IA
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id='beneficios' className='py-20 px-4 bg-card/30'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-foreground'>
              Beneficios Empresariales Transformadores
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Las empresas que implementan GEO temprano obtienen ventajas
              significativas de primer movimiento
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='bg-card border-border hover:border-primary/50 transition-colors'>
              <CardHeader>
                <TrendingUp className='h-12 w-12 text-accent mb-4' />
                <CardTitle className='text-foreground'>
                  Ventaja Competitiva
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Posicionamiento monopolístico para empresas que actúan
                  rápidamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-sm text-muted-foreground'>
                      Mejora en campañas
                    </span>
                    <span className='text-sm font-semibold text-accent'>
                      +22%
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm text-muted-foreground'>
                      Citas de medios ganados
                    </span>
                    <span className='text-sm font-semibold text-accent'>
                      90%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-card border-border hover:border-primary/50 transition-colors'>
              <CardHeader>
                <BarChart3 className='h-12 w-12 text-primary mb-4' />
                <CardTitle className='text-foreground'>
                  ROI Demostrable
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Resultados cuantificables e impacto directo en ingresos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-sm text-muted-foreground'>
                      Tasa de conversión IA
                    </span>
                    <span className='text-sm font-semibold text-primary'>
                      27%
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm text-muted-foreground'>
                      vs. Búsqueda tradicional
                    </span>
                    <span className='text-sm font-semibold text-muted-foreground'>
                      2.1%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-card border-border hover:border-primary/50 transition-colors'>
              <CardHeader>
                <Users className='h-12 w-12 text-chart-3 mb-4' />
                <CardTitle className='text-foreground'>
                  Alcance de Audiencia
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Acceso a nuevos canales de descubrimiento empresarial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-sm text-muted-foreground'>
                      Compradores B2B usan IA
                    </span>
                    <span className='text-sm font-semibold text-chart-3'>
                      89%
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm text-muted-foreground'>
                      Nuevos registros de ChatGPT
                    </span>
                    <span className='text-sm font-semibold text-chart-3'>
                      10%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id='casos-uso' className='py-20 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-foreground'>
              Casos de Uso Empresariales del Mundo Real
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <Card className='bg-accent/10 border-accent/30'>
              <CardHeader>
                <CardTitle className='text-accent'>
                  Marca de Vehículos Eléctricos (EAU)
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Implementación de inteligencia de ubicación para lanzamiento
                  de tienda pop-up
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div>
                    <div className='text-sm font-semibold text-foreground mb-1'>
                      Resultados:
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      ~5,000 compradores de alta intención identificados
                    </div>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-foreground mb-1'>
                      Impacto:
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      $1.3M en ventas con 21 ventas directas
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-primary/10 border-primary/30'>
              <CardHeader>
                <CardTitle className='text-primary'>
                  Empresa Fortune 500 - Servicios Financieros
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Marco GEO estructurado con señales de autoridad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div>
                    <div className='text-sm font-semibold text-foreground mb-1'>
                      Resultados en 6 semanas:
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      32% de leads calificados de plataformas IA
                    </div>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-foreground mb-1'>
                      Impacto:
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Reducción significativa en ciclo de ventas
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id='implementacion' className='py-20 px-4 bg-card/30'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-foreground'>
              Marco de Implementación Sistemática
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='bg-card border-border'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-primary font-bold text-xl'>1</span>
                </div>
                <CardTitle className='text-foreground'>
                  Fundación y Evaluación
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Semanas 1-2
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Análisis de estado actual</li>
                  <li>• Prueba de visibilidad de marca</li>
                  <li>• Análisis competitivo</li>
                  <li>• Configuración técnica</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='bg-card border-border'>
              <CardHeader>
                <div className='w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-accent font-bold text-xl'>2</span>
                </div>
                <CardTitle className='text-foreground'>
                  Optimización de Contenido
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Semanas 3-6
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Arquitectura "Answer-First"</li>
                  <li>• Contenido basado en intención</li>
                  <li>• Formato para comprensión IA</li>
                  <li>• Estructura conversacional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='bg-card border-border'>
              <CardHeader>
                <div className='w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-chart-3 font-bold text-xl'>3</span>
                </div>
                <CardTitle className='text-foreground'>
                  Construcción de Autoridad
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  Semanas 4-8
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
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

      {/* CTA Section */}
      <section className='py-20 px-4'>
        <div className='container mx-auto text-center'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-foreground'>
              El Futuro del Descubrimiento Digital es Ahora
            </h2>
            <p className='text-xl text-muted-foreground mb-8'>
              2025 es un año crítico para establecer tu posición en el
              ecosistema de búsqueda dirigido por IA. Las empresas que
              implementen GEO ahora capturarán posiciones dominantes.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-primary hover:bg-primary/90 text-primary-foreground'
              >
                <Zap className='mr-2 h-5 w-5' />
                Comenzar con GEO
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-accent text-accent hover:bg-accent/10 bg-transparent'
              >
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border bg-card/50 py-12 px-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <Brain className='h-6 w-6 text-primary' />
                <span className='text-xl font-bold text-foreground'>GEO</span>
              </div>
              <p className='text-sm text-muted-foreground'>
                Optimización de Experiencia Generativa para el futuro del
                descubrimiento digital.
              </p>
            </div>
            <div>
              <h4 className='font-semibold text-foreground mb-4'>Servicios</h4>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li>Auditoría GEO</li>
                <li>Implementación</li>
                <li>Consultoría</li>
                <li>Capacitación</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-foreground mb-4'>Recursos</h4>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li>Documentación</li>
                <li>Casos de Estudio</li>
                <li>Blog</li>
                <li>Webinars</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-foreground mb-4'>Contacto</h4>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li>info@geo-optimization.com</li>
                <li>+1 (555) 123-4567</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className='border-t border-border mt-8 pt-8 text-center'>
            <p className='text-sm text-muted-foreground'>
              © 2025 GEO - Optimización de Experiencia Generativa. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
