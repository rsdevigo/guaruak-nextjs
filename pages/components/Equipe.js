import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";

function Equipe({ equipe }) {
  const theme = useTheme();

  const EquipeStyled = styled.div`
    position: relative;
    padding-top: 4rem;
    background: #fff;
    ::before {
      content: "ass.";
      background: var(--icone-equipe) no-repeat 50%;
      background-size: 50%;
      height: 100px;
      left: 50%;
      position: absolute;
      text-indent: -9999px;
      top: -3rem;
      transform: translateX(-50%);
      width: 200px;
    }

    h1 {
      text-align: center;
      color: ${theme.colors.laranja};
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
      padding: 2rem 0 8rem;
    }
  `;

  const MembrosContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    --margin: 1rem;
    margin: calc(var(--margin) * -1);
  `;

  const MembroStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-self: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem 4rem;
    img {
      width: 120px;
      margin-bottom: 1rem;
    }
  `;

  const MembroInfoStyled = styled.div`
    display: flex;
    align-items: flex-start;
    padding-left: 1rem;
    justify-content: center;
    flex-direction: column;
    .titulacao {
      font-size: 0.7rem;
    }
    .nome {
      text-align: left;
    }
    .funcao {
      color: ${theme.colors.verde};
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  `;

  return (
    <EquipeStyled
      style={equipe.icone && { ["--icone-equipe"]: `url(${equipe.icone.url})` }}
    >
      <section className="container">
        <h1>{equipe.titulo}</h1>
        <MembrosContainerStyled>
          {equipe.membros.map((membro) => {
            return (
              <MembroStyled>
                <div>
                  <img
                    alt={`Foto do(a) ${membro.nome} membro da equipe`}
                    src={membro.foto && membro.foto.url}
                  />
                </div>
                <MembroInfoStyled>
                  <div className="titulacao">{membro.titulacao}</div>
                  <div className="nome">{membro.nome}</div>
                  <div className="funcao">{membro.papel}</div>
                </MembroInfoStyled>
              </MembroStyled>
            );
          })}
        </MembrosContainerStyled>
      </section>
    </EquipeStyled>
  );
}

export default Equipe;
