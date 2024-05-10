import { useEffect, useMemo, useState } from "react";
import "./DashboardProject.css";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getData } from "./getData";

export default function DashboardProject() {
    const [projects, setProjects] = useState([]);
    const [deletedRows, setDeletedRows] = useState([]);

    useEffect(() => {
        getData().then((data) => {
        setProjects(data);
        });
    }, []);

    console.log(projects)
    
    const handleDelete = () => {
        const updatedProjects = projects.filter(
        (project) => !deletedRows[deletedRows.length - 1].includes(project)
        );
        setProjects(updatedProjects);
        setDeletedRows([]);
        console.log("updated", updatedProjects);
    };

    const handleAdd = () => {
        
        const projectName = window.prompt("Enter project name:");
        const description = window.prompt("Enter Description:");
        const image_url = window.prompt("Enter Image URL:");
        const link = window.prompt("Enter Link:");

        if (!projectName || !description) {
            return;
        }
        
        let newId = 1;
        if (projects.length > 0) {
            newId = Math.max(...projects.map(project => project.id)) + 1;
        }

        const newProject = {
            id: newId,
            name: projectName,
            username: description,
            phone: image_url,
            website: link
        }

        const updatedProjects = [...projects, newProject];
        console.log(updatedProjects)
        setProjects(updatedProjects);
    };

    const columns = useMemo(() => {
        return [
        { field: "id", headerName: "ID", width: 70, filterable: false },
        { field: "name", headerName: "Project Name", width: 130 },
        { field: "username", headerName: "Description", width: 130 },
        { field: "phone", headerName: "Image Url", width: 130 },
        { field: "website", headerName: "Link", width: 130 },
        { field: "id", headerName: "Type ID", width: 130 },
        ];
    });

    return (
        <Box
        sx={{
            height: 400,
            width: "100%",
        }}
        >
        <Button
            color="success"
            variant="contained"
            onClick={handleAdd}
            sx={{ textAlign: "center", alignItems: "center" }}
        >
            Add Project
        </Button>
        <Typography
            variant="h2"
            component="h2"
            sx={{ textAlign: "center", mt: "0px", mb: "20px" }}
        >
            Projects
        </Typography>
        <DataGrid
            columns={columns}
            rows={projects}
            checkboxSelection
            onRowSelectionModelChange={(selectionModel) => {
            const rowIds = selectionModel.map((rowId) => parseInt(String(rowId)));
            const rowsToDelete = projects.filter((row) =>
                rowIds.includes(row.id)
            );
            setDeletedRows([...deletedRows, rowsToDelete]);
            }}
        ></DataGrid>

        <Button
            color="error"
            variant="contained"
            onClick={handleDelete}
            sx={{ textAlign: "center", mt: "10px", alignItems: "center" }}
        >
            Delete
        </Button>
        </Box>
    );
}
