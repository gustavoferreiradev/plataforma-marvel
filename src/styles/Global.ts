import { createGlobalStyle } from "styled-components";
import {
  KastelovAxiformaThin,
  KastelovAxiformaThinItalic,
  KastelovAxiformaLight,
  KastelovAxiformaLightItalic,
  KastelovAxiformaRegular,
  KastelovAxiformaMedium,
  KastelovAxiformaMediumItalic,
  KastelovAxiformaSemiBold,
  KastelovAxiformaSemiBoldItalic,
  KastelovAxiformaBold,
  KastelovAxiformaBoldItalic,
  KastelovAxiformaExtraBold,
  KastelovAxiformaExtraBoldItalic,
  KastelovAxiformaHeavy,
  KastelovAxiformaHeavyItalic,
  KastelovAxiformaBook,
  KastelovAxiformaBookItalic,
} from "../assets/fonts";

export default createGlobalStyle`

  @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 100;
    src: url(${KastelovAxiformaThin});
  }

    @font-face {
    font-family: Axiforma;
    font-style: italic;
    font-weight: 100;
    src: url(${KastelovAxiformaThinItalic});
  }

    @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 300;
    src: url(${KastelovAxiformaLight});
  }
    @font-face {
    font-family: Axiforma;
    font-style: italic;
    font-weight: 300;
    src: url(${KastelovAxiformaLightItalic});
  }

  @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 400;
    src: url(${KastelovAxiformaRegular});
  }

    @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 500;
    src: url(${KastelovAxiformaMedium});
  }

    @font-face {
    font-family: Axiforma;
    font-style: italic;
    font-weight: 500;
    src: url(${KastelovAxiformaMediumItalic});
  }
    @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 600;
    src: url(${KastelovAxiformaSemiBold});
  }
    @font-face {
    font-family: Axiforma;
    font-style: italic;
    font-weight: 600;
    src: url(${KastelovAxiformaSemiBoldItalic});
  }
    @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 700;
    src: url(${KastelovAxiformaBold});
  }
    @font-face {
    font-family: Axiforma;
    font-style: italic;
    font-weight: 700;
    src: url(${KastelovAxiformaBoldItalic});
  }
    @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 800;
    src: url(${KastelovAxiformaExtraBold});
  }
    @font-face {
    font-family: Axiforma;
    font-style: italic;
    font-weight: 800;
    src: url(${KastelovAxiformaExtraBoldItalic});
  }
    @font-face {
    font-family: Axiforma;
    font-style: normal;
    font-weight: 900;
    src: url(${KastelovAxiformaHeavy});
  }
    @font-face {
    font-family: Axiforma;
    font-style: italic;
    font-weight: 800;
    src: url(${KastelovAxiformaHeavyItalic});
  }

      @font-face {
    font-family: 'Axiforma Book';
    font-style: normal;
    font-weight: 400;
    src: url(${KastelovAxiformaBook});
  }
      @font-face {
    font-family: 'Axiforma Book';
    font-style: normal;
    font-weight: 400;
    src: url(${KastelovAxiformaBookItalic});
  }

    body {
        font-family: 'Axiforma';
        font-weight: 300;
        background-color: #000;
        height: max-content;
    }
`;
