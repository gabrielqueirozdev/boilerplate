import * as S from './styles'

const Main = ({
  title = 'Boilerplate utilizando TypeScript, ReactJS, NextJS e Styled Components',
  description = 'https://github.com/gabrielqueirozdev'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/hero-illustration.png"
      alt="Um desenvolvedor fazendo sinal de cumprimento"
    />
    <S.Title>{title}</S.Title>
    <S.Description>
      <S.Link href={description} target="_blank">
        {description}
      </S.Link>
    </S.Description>
  </S.Wrapper>
)

export default Main
