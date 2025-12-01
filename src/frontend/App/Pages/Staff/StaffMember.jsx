import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "@App/Core/axios";
import styled from "styled-components";

//styles
const StaffMemberStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;

    img {
        display: block;
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    h1 {
        font-size: 36px;
        margin-bottom: 0rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.secondary.default};
    }
    h2 {
        font-size: 28px;
        margin: 0;
        text-align: center;
        color: ${({ theme }) => theme.colors.secondary.default};
    }
    h3 {
        font-size: 18px;
        margin: 0rem 0 0.5rem 0;
        color: ${({ theme }) => theme.colors.secondary.default};
    }

    ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        margin-bottom: 1rem;

        li {
            margin-bottom: 0.5rem;
            text-align: left;
        }
    }

    .bio {
        line-height: 1.6;
        font-size: 16px;
        max-width: 700px;
        text-align: left;
    }

    nav {
        margin-bottom: 1.5rem;
    }
`;

//components
import Preloader from "@App/Core/components/Preloader";
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/inset";
import Breadcrumbs from "@App/Core/components/Link/Breadcrumbs";

//component
const StaffMember = () => {
    const [member, setMember] = useState();
    const { staffId } = useParams();

    useEffect(() => {
        const fetchStaffMember = async () => {
            const resp = await axios.get(`/staff/${staffId}`);
            setMember(resp.data);
        };
        fetchStaffMember();
    }, [staffId]);

    if (!member) return <Preloader />;

    const { src, name, yearStarted, accolades, bio } = member;

    const crumbs = [
        { id: 1, href: "/staff", text: "All Staff" },
        { id: 2, text: name },
    ];

    return (
        <main>
            <Inset>
                <StaffMemberStyled>
                    <Meta pageTitle={`${name} :: Staff Member`} />
                    <Breadcrumbs crumbs={crumbs} />
                    <img src={src} alt={name} />
                    <h1>{name}</h1>
                    <h3>Joined: {yearStarted}</h3>
                    <h3>Accolades</h3>
                    <ul>
                        {accolades.map((accolade, idx) => (
                            <li key={idx}>{accolade}</li>
                        ))}
                    </ul>
                    <div
                        className="bio"
                        dangerouslySetInnerHTML={{ __html: bio }}
                    />
                </StaffMemberStyled>
            </Inset>
        </main>
    );
};

export default StaffMember;
