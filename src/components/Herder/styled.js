import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #fe5d26, #370d44);
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: right;
    }

    .logo{
        flex: 1;




    }
    nav{

        ul{
            
            display: flex;
            
        }
            li{
                list-style: none;
                margin-left: 20px;
                a{
                   text-decoration: none;
                    color: #fff;
                    &:hover{
                        color: #f5b800;
                    }
                }
            }

    }`
;

