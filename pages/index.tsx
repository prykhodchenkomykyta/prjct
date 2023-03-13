import Head from "next/head";
import Image from "next/image";
import Sidebar from "@/components/global/Sidebar";
import Topbar from "@/components/global/Topbar";
import { useEffect, useState } from "react";
import { ColorModeContext, useMode } from "@/ui/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "@/ui/theme";
import { useTheme } from "@mui/material";
import Header from "@/components/global/Header";
import { CSVLink } from "react-csv";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import SearchButton from "@/components/SearchButton";

export default function Home() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    axios
      .post("http://localhost/unigui/backend/index.php", formData)
      .then((response) => {
        setData(response.data);
        localStorage.setItem("data", JSON.stringify(response.data));
        setIsLocalStorageLoaded(true);
      })
      .finally(() => setLoading(false));
  };

  const handleClearLocalStorage = () => {
    localStorage.removeItem("data");
    setData([]);
    setIsLocalStorageLoaded(false);
  };

  useEffect(() => {
    const localData = localStorage.getItem("data");
    if (localData) {
      setData(JSON.parse(localData));
      setIsLocalStorageLoaded(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>CSV Parser</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://static.wixstatic.com/media/64dc93_be5187a1a93a49f0ac3d7be435bb3372~mv2.png/v1/fill/w_93,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/prlogo2.png"
        />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Box m="20px">
                <Header title="CSV" subtitle="List of data from CSV" />
                <Box
                  m="40px 0 0 0"
                  height="70vh"
                  sx={{
                    "& .MuiDataGrid-root": {
                      border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                    },
                    "& .name-column--cell": {
                      color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.blueAccent[700],
                      borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: `${colors.grey[100]} !important`,
                    },
                  }}
                >
                  <Button variant="contained" component="label">
                    Import CSV
                    <input type="file" hidden onChange={handleFileUpload} />
                  </Button>
                  {loading && <CircularProgress />}
                  <Button
                    variant="contained"
                  >
                    <CSVLink data={data}>Export CSV</CSVLink>
                  </Button>

                  <Button
                    variant="contained"
                    onClick={handleClearLocalStorage}
                  >
                    Clear Local Storage
                  </Button>
                  {isLocalStorageLoaded && ( 
                    <>
                    <table className="">
                      <thead>
                        <tr>
                          {data[0].map((header) => (
                            <th key={header}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.slice(1).map((row, index) => (
                          <tr key={index}>
                            {row.map((cell) => (
                              <td key={cell}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </>
                  )}
                </Box>
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
