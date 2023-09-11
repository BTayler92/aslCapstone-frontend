import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./RequestCheck.scss";
import APIURL from "./APIURL";
// import { Buffer } from "buffer";
import { useUser, useAuth } from "@clerk/clerk-react";

const RequestCheck = () => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(`${APIURL}/request`);
            const data = await response.json();
            console.log(data);
            setRequests(data.requests);
        };

        makeAPICall();
    }, []);
    return (
        <div id="requestCheck">
            <h1 className="requestCheck">Request Checker</h1>
            <p className="requestCheck">
                This page is for Admin to check on requests
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Details</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => {
                        return (
                            <tr key={request.id}>
                                <td>{request.name}</td>
                                <td>{request.email}</td>
                                <td>{request.details}</td>
                                <td>
                                    {new Date(
                                        request.createdAt
                                    ).toLocaleString()}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default RequestCheck;
