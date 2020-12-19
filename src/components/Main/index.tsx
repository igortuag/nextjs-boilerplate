import * as S from './styles'

const Main = ({ title = 'React Avançado', description = 'TypeScript, ReactS, NextJS e Styled Components'}) => (
  <main>
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>
        {description}
      </S.Description>
      <S.Illustration src="/img/hero-illustration.svg" alt="Um desenvolvedor de frete para uma tela com código."/>
    </S.Wrapper>
  </main>
)

export default Main
