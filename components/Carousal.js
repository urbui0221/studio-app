import React, { useEffect } from 'react'


const Carousal = () => {
    return (
        <>
        <div className="section">
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-12 p-0">
                <div id="rev_slider" className="rev_slider fullscreenbanner">
                <ul>
                    <li data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="images/slider/slider_100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide">
                        <img src="images/slider/slider_1920x1000.jpg" alt="" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="110" data-rotatestart="0" data-rotateend="0" data-blurstart="0" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" />
                        <div className="tp-caption mon-140-700 tp-resizeme" 
                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                             data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                             data-responsive_offset="on" 
                             data-frames='[{"delay":0,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                             data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                             data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                             data-paddingleft="[0,0,0,0]">Film<br/> + Video
                        </div>
                        <div className="tp-caption mon-100-700 tp-resizeme"
                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['180','180','180','180']"
                             data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                             data-responsive_offset="on"
                             data-frames='[{"delay":0,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                             data-textAlign="['inherit','inherit','inherit','inherit']"
                             data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]"
                             data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">Productions
                        </div>
                        <div className="tp-caption btn-01 rev-btn"
                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['300','300','300','300']"
                             data-width="none" data-height="none" data-whitespace="nowrap" data-type="button"
                             data-responsive_offset="on" data-responsive="off"
                             data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"+8490","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0,0,0,1);bg:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                             data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[15,15,15,15]"
                             data-paddingright="[30,30,30,30]" data-paddingbottom="[15,15,15,15]"
                             data-paddingleft="[30,30,30,30]">Hire Us Now
                        </div>
                    </li>
                    <li data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="images/slider/slider_100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide">
                        <img src="images/slider/slider_1920x1000.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" />
                        <div className="tp-caption tp-resizeme mer-34-400"
                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['-46','-46','-46','-46']"
                             data-fontsize="['34','34','34','24']" data-width="none" data-height="none"
                             data-whitespace="nowrap" data-type="text" data-responsive_offset="on"
                             data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                             data-textAlign="['inherit','inherit','inherit','inherit']"
                             data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                             data-paddingleft="[0,0,0,0]">We are creative film studio
                        </div>
                        <div className="tp-caption tp-resizeme mon-64-700"
                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['70','70','70','70']"
                             data-fontsize="['64','64','50','30']" data-lineheight="['64','64','50','30']"
                             data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                             data-responsive_offset="on"
                             data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                             data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                             data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">We are nine studio
                        </div>
                    </li>
                    <li data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="images/slider/slider_100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Slide">
                        <img src="images/slider/slider_1920x1000.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" />
                        <div className="tp-caption tp-resizeme mer-34-400"
                             data-x="['center','center','center','center']" data-hoffset="['-1','-1','-1','0']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['-100','-100','-100','-46']"
                             data-fontsize="['34','34','34','24']" data-width="none" data-height="none"
                             data-whitespace="nowrap" data-type="text" data-responsive_offset="on"
                             data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                             data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                             data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">Let’s make
                        </div>
                        <div className="tp-caption tp-resizeme mon-64-700"
                             data-x="['center','center','center','center']" data-hoffset="['-10','-10','-4','-1']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['0','0','8','8']"
                             data-fontsize="['64','64','50','30']" data-lineheight="['64','64','50','30']"
                             data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                             data-responsive_offset="on"
                             data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                             data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                             data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">Great Thing Together!
                        </div>
                        <div className="tp-caption tp-resizeme lat-16-400"
                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['116','116','116','116']"
                             data-width="['856','856','571','324']" data-height="none" data-whitespace="normal"
                             data-type="text" data-responsive_offset="on"
                             data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                             data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                             data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                We are a creative film and photo production company based in Berlin.
                                Working with a network of diverse professionals, we believe in the importance of strong visual communication.
                        </div>
                        <div className="tp-caption btn-01 rev-btn"
                             data-x="['center','center','center','center']" data-hoffset="['0','0','0','4']"
                             data-y="['middle','middle','middle','middle']" data-voffset="['222','222','222','273']"
                             data-width="none" data-height="none" data-whitespace="nowrap" data-type="button"
                             data-responsive_offset="on" data-responsive="off"
                             data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0,0,0,1);bg:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                             data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[15,15,15,15]"
                             data-paddingright="[30,30,30,30]" data-paddingbottom="[15,15,15,15]" data-paddingleft="[30,30,30,30]">Hire us now
                        </div>
                    </li>
                </ul>
                <div className="tp-static-layers">
                    <div className="tp-caption tp-resizeme tp-static-layer tp-static-layer-1" data-x="['left','left','left','left']" 
                         data-hoffset="['15','15','15','0']" data-y="['middle','middle','middle','top']" 
                         data-voffset="['-66','-66','-66','100']" data-width="none" data-height="none"
                         data-whitespace="nowrap" data-type="text" data-responsive_offset="on"
                         data-startslide="0" data-endslide="2"
                         data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;rZ:270;tO:0% 0%;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">Follow Us
                    </div>
                    <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme tp-static-layer" data-x="['left','left','left','left']" 
                         data-hoffset="['20','20','20','8']" data-y="['middle','middle','middle','top']" data-voffset="['0','0','0','120']"
                         data-width="1" data-height="60" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on"
                         data-startslide="0" data-endslide="2"
                         data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"></div>
                    <div className="tp-caption primary-color-hover tp-static-layer tp-icon" data-x="['left','left','left','left']" 
                         data-hoffset="['0','0','0','-20']" data-y="['middle','middle','middle','top']" 
                         data-voffset="['90','90','90','200']" data-width="37" data-height="37"
                         data-whitespace="nowrap" data-type="button" data-responsive_offset="on"
                         data-responsive="off" data-startslide="0" data-endslide="2"
                         data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"><i className="fa fa-facebook"></i>
                    </div>
                    <div className="tp-caption primary-color-hover tp-static-layer tp-icon"
                         data-x="['left','left','left','left']" data-hoffset="['0','0','0','-20']"
                         data-y="['middle','middle','middle','top']" data-voffset="['140','140','140','250']"
                         data-width="37" data-height="37" data-whitespace="nowrap" data-type="button"
                         data-responsive_offset="on" data-responsive="off" data-startslide="0"
                         data-endslide="2"
                         data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"><i className="fa fa-twitter"></i>
                    </div>
                    <div className="tp-caption primary-color-hover tp-static-layer tp-icon"
                         data-x="['left','left','left','left']" data-hoffset="['0','0','0','-20']"
                         data-y="['middle','middle','middle','top']" data-voffset="['190','190','190','300']"
                         data-width="37" data-height="37" data-whitespace="nowrap" data-type="button"
                         data-responsive_offset="on" data-responsive="off" data-startslide="0" data-endslide="2"
                         data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"><i className="fa fa-instagram"></i>
                    </div>
                    <div className="tp-caption primary-color-hover tp-static-layer tp-icon"
                         data-x="['left','left','left','left']" data-hoffset="['0','0','0','-20']"
                         data-y="['middle','middle','middle','top']" data-voffset="['240','240','240','350']"
                         data-width="37" data-height="37" data-whitespace="nowrap" data-type="button"
                         data-responsive_offset="on" data-responsive="off" data-startslide="0"
                         data-endslide="2"
                         data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"><i className="fa fa-pinterest"></i>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carousal
