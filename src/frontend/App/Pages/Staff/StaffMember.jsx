import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "@App/Core/axios";

import styled from "styled-components";

//styles
const StaffMemberStyled = styled.div`
    img {
        display: block;
        max-width: 300px;
        width: 100%;
    }
`;

//component
import Preloader from "@App/Core/components/Preloader";
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/inset";
import Breadcrumbs from "@App/Core/components/Link/Breadcrumbs";

// component
const StaffMember = () => {
    const [member, setMember] = useState();
    const { staffId } = useParams();

    useEffect(() => {
        const fetchStaffMember = async () => {
            const resp = await axios.get(`/staff/${staffId}`);
            console.log({ resp });
            setMember(resp.data);
        };

        fetchStaffMember();
    }, [staffId]);
    if (!member) return <Preloader />;

    console.log({ member });
    const { src, name, yearStarted, accolades, bio } = member;

    const crumbs = [
        { id: 1, href: "/staff", text: "All staff" },
        { id: 2, text: name },
    ];

    return (
        <main>
            <Inset>
                <StaffMemberStyled>
                    <Meta pageTitle={`${name} :: Staff Member`} />
                    <h1>Staff Member</h1>
                    <Breadcrumbs crumbs={crumbs} />
                    <img src={src} alt={name} />
                    <h2>{name}</h2>
                    <h3>Year Started: {yearStarted}</h3>
                    <h3>Accolades</h3>
                    <ul>
                        {accolades.map((accolade, idx) => {
                            return <li key={idx}> {accolade}</li>;
                        })}
                    </ul>

                    <div dangerouslySetInnerHTML={{ __html: bio }} />
                </StaffMemberStyled>
            </Inset>
        </main>
    );
};

export default StaffMember;
