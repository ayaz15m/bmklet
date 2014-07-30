/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Vladimir Geshanov |  */
function explain( name, output, msg ) {
    newwin = window.open( '', '', 'top=80,left=60,width=350,height=200' );
    if ( !newwin.opener ) newwin.opener = self;
    newwin.opener.document.bgColor = "EBEBEB";
    with ( newwin.document ) {
        open();
        write( '<body onLoad="document.form.box.focus()">' );
        write( '<form name=form ' );
        write( '    onSubmit=opener.document.bgColor="EAE8E4";window.close()>' );
        write( msg );
        write( '<br/>' );
        write( '<font face=Verdana size=2>' );
        write( '<p>You may enter your ' + name + ' here ' );
        write( '<p>and it will be copied into the form for you.</p>' );
        write( '<center>' + name + ':' );
        write( '</font>' );
        write( '<input type=text name=box size=10 onKeyUp=' + output + '=this.value>' );
        write( ' ' );
        write( '<input type=submit value="Finish">' );
        write( '</center></form>' );
        close();

    }
}
