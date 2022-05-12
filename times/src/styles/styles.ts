import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  border: 2px solid;

  .filter {
    header {
      display: flex;
      width: 50vw;

      h1 {
        flex: 1;
      }
    }

    select {
      list-style-type: none;
    }
  }

  .inputData {
    width: 50vw;
    height: 48px;
    display: flex;
    padding: 16px;
    &:hover {
      background: #ffffff;
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
    }
    div {
        display: flex;
        align-items: center;

        .leftInfo{
            flex: 1;
        }
    }
  }

  form {
    width: 50vw;
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
`;
