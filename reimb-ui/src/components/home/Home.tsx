import React from 'react'


export class Home extends React.Component<any, any>{
    constructor(props:any){
        super(props)
        this.state = {
            user:{}
        }
    }

    // async componentDidMount(){
    //     let user = await siliconValleyLogin('franky', 'password')
    //     this.setState({
    //         ...this.state,
    //         user
    //     })
    // }

    render() {
        // console.log(this.state.user);
        
        return (
            // we have a special tag in react that isn't a real element
            // we call this tag a fragment
            // it look like an empty html tag, and react will treat it as an html tag
            // but it will not get rendered to the real dom
            <>
                {/* <LifecycleComponent name='Lifecycle is Cool' />
                <FirstComponent />
                <FirstComponent />
                <FirstComponent />
                {this.state.garden} */}
            </>
        )
    }
}