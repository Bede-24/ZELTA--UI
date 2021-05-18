import { useHistory } from 'react-router';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout'
import TopBar from '../TopBar'

function MyCooporativeGroups(){

    const history = useHistory();

    return(
        <Layout>
            <div>
                <TopBar />
                <div className='esusu-groups-container'>
                {/* mapping of the groups starts here */}
                    <div className="MyEsusuGroup">
                        <div className="flex">
                            <div className='esusu-cycle-symbol'>
                                MG
                            </div>
                            <div className='esusu-cycle-name'>
                                Medical Students Group
                            </div>
                        </div>
                        <div className='esusu-group-info'>
                            Cycles : 0
                        </div>
                        <div className='esusu-group-info'>
                            Opened : 0
                        </div>
                        <div className='esusu-group-info'>
                            Closed : 0
                        </div>
                        <div className='open-cycles-button'>
                            <Button
                                type='secondary'
                                onClick={() => history.push('/MyCooporativeCycles')}
                            >
                                Open
                            </Button>
                        </div>
                    </div>


                    <div className="MyEsusuGroup">
                        <div className="flex">
                            <div className='esusu-cycle-symbol'>
                                MG
                            </div>
                            <div className='esusu-cycle-name'>
                                Medical Students Group
                            </div>
                        </div>
                        <div className='esusu-group-info'>
                            Cycles : 0
                        </div>
                        <div className='esusu-group-info'>
                            Opened : 0
                        </div>
                        <div className='esusu-group-info'>
                            Closed : 0
                        </div>
                        <div className="open-cycles-button">
                            <Button
                                type='secondary'
                                onClick={() => history.push('/MyCooporativeCycles')}
                            >
                                Open
                            </Button>
                        </div>
                    </div>

                   
                    
                </div>
            </div>
        </Layout>
    )
}
export default MyCooporativeGroups;