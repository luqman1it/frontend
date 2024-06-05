import { useEffect, useMemo, useState } from "react";
import "./DashboardProject.css";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getData } from "./getData";
import { sendData } from "./sendData";
import { deleteData } from "./deleteData";

export default function DashboardProject() {
    const [projects, setProjects] = useState([]);
    const [deletedRows, setDeletedRows] = useState([]);

    useEffect(() => {
        getData().then((data) => {
        setProjects(data);
        });
    }, []);

    // const handleDelete = () => {
    //     const updatedProjects = projects.filter(
    //     (project) => !deletedRows[deletedRows.length - 1].includes(project)
    //     );
    //     setProjects(updatedProjects);
    //     setDeletedRows([]);
    //     console.log("updated", updatedProjects);
    // };

    const handleDelete = async () => {
        const deletedProjectIds = deletedRows.flat().map(row => row.id);
        try {
            await Promise.all(deletedProjectIds.map(id => deleteData(id)));
            const updatedProjects = projects.filter(
                (project) => !deletedRows.flat().includes(project)
            );
            setProjects(updatedProjects);
            setDeletedRows([]);
            console.log("updated", updatedProjects);
        } catch (error) {
            console.error("Error deleting projects:", error);
        }
    };

    // const handleAdd = () => {

    //     const projectName = window.prompt("Enter project name:");
    //     const description = window.prompt("Enter Description:");
    //     const image_url = window.prompt("Enter Image URL:");
    //     const link = window.prompt("Enter Link:");

    //     if (!projectName || !description) {
    //         return;
    //     }
        
    //     let newId = 1;
    //     if (projects.length > 0) {
    //         newId = Math.max(...projects.map(project => project.id)) + 1;
    //     }

    //     const newProject = {
    //         id: newId,
    //         name: projectName,
    //         description: description,
    //         img_url: image_url,
    //         link: link
    //     }
        
    //     sendData(newProject);

    //     const updatedProjects = [...projects, newProject];
    //     setProjects(updatedProjects);
    // };

    const columns = useMemo(() => {
        return [
        { field: "id", headerName: "ID", width: 70, filterable: false },
        { field: "name", headerName: "Project Name", width: 130 },
        { field: "description", headerName: "Description", width: 130 },
        { field: "img_url", headerName: "Image Url", width: 130 },
        { field: "link", headerName: "Link", width: 130 },
        { field: "id", headerName: "Type ID", width: 130 },
        ];
    });

    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        // تحديث حالة النموذج عند تغيير الإدخالات
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleImage = (e) => {
        // تحديث حالة النموذج عند تغيير الإدخالات
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      };
     
    
    const handleSubmit = async (e) => {
        console.log(e.target)
        e.preventDefault(); // منع إعادة تحميل الصفحة
    
        try {
          await sendData(formData); // استدعاء sendData مع بيانات النموذج
          // إعادة تعيين النموذج بعد الإرسال الناجح
            setFormData({
                // إعادة تعيين حالة النموذج إلى القيم الافتراضية
            });
            } catch (error) {
            console.error('Failed to send data:', error);
            }
        };

    return (
        <Box
        sx={{
            height: 400,
            width: "100%",
        }}
        >
        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="name" id="" value={formData.name} onChange={handleChange}/>
            <input type="text" placeholder="description" name="description" id="" value={formData.description} onChange={handleChange}/>
            <input type="file" placeholder="img url" name="img_url" 
            onChange={handleImage}
        
            />
            <input type="text" placeholder="link" name="link" id="" value={formData.link} onChange={handleChange}/>
            <input type="number" placeholder="type id" name="type_id" id="" value={formData.type_id} onChange={handleChange}/>
            <input type="submit" value="submit" color="success" />
        </form>
        {/* <Button
            color="success"
            variant="contained"
            onClick={handleAdd}
            sx={{ textAlign: "center", alignItems: "center" }}
        >
            Add Project
        </Button> */}
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