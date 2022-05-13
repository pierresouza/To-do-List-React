import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .main-container {
    height: 50vh;
    width: 50vw;
    background: #ffffff;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 16px;
  

    .filter {
      header {
        display: flex;
        width: 50vw;
        list-style-type: none;

        h1 {
          flex: 1;
        }
      }
    }

    .inputData {
      width: 48vw;
      height: 48px;
      display: flex;
      padding: 8px  ;
      &:hover {
        background: #ffffff;
        box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
      }
      div {
        display: flex;
        align-items: center;

        .leftInfo {
          width: 42vw;
          input{
            padding-left: 8px;
          }
        }
      }
    }

    form {
      width: 50vw;
      padding: 16px;
      button {
        margin-right: 24px;
      }

      input {
        border: 0;
        width: 30vw;
        &:focus {
          outline: 0;
        }
        &::placeholder {
          color: #3d82eb;
        }
      }
    }
  }
`;
