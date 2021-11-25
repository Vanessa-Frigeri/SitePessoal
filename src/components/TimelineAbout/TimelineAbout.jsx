import React from 'react';
import { FaGraduationCap, FaBriefcase, FaBook } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timelineAbout.css';
import {
  TimelineBox
} from './TimelineAboutElements';

const TimelineAbout = () => {
  return (
    <TimelineBox>      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#3f51b5', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #3f51b5' }}
          date="Set/2021 - Set/2022"
          iconStyle={{ background: '#232d64', color: '#fff'}}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">PUC - Minas Gerais</h3>
          <h4 className="vertical-timeline-element-subtitle">Arquitetura de Software Distribuído</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>       
  
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#3f51b5', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #3f51b5' }}
          date="Ago/2021 - Mar/2022"
          iconStyle={{ background: '#232d64', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Digital House</h3>
          <h4 className="vertical-timeline-element-subtitle">Desenvolvimento Web Full Stack</h4>
          <p>
            Strategy, Social Media
          </p>        
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan/2021 - Atual"
          contentStyle={{ background: '#af50bf', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #af50bf' }}
          iconStyle={{ background: '#3e1046', color: '#fff' }}
          icon={<FaBook />}
        >
          <h3 className="vertical-timeline-element-title">CK English</h3>
          <h4 className="vertical-timeline-element-subtitle">Inglês Intermediário/Avançado</h4>
          <p>
            Creative Direction, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Ago/2019 - Atual"
          contentStyle={{ background: '#30aa9f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #30aa9f' }}
          iconStyle={{ background: '#003c36', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">TIM S.A.</h3>
          <h4 className="vertical-timeline-element-subtitle">Consultora Sênior</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Out/2014 - Ago/2019"
          contentStyle={{ background: '#30aa9f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #30aa9f' }}
          iconStyle={{ background: '#003c36', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">NTT Data Corporation</h3>
          <h4 className="vertical-timeline-element-subtitle">Programadora / Analista de Sistemas</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Out/2013 - Out/2014"
          contentStyle={{ background: '#30aa9f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #30aa9f' }}
          iconStyle={{ background: '#003c36', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">HCI Sistemas Integrados</h3>
          <h4 className="vertical-timeline-element-subtitle">Suporte Técnico</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#3f51b5', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #3f51b5' }}
          date="Jan/2012 - Dez/2014"
          iconStyle={{ background: '#232d64', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Análise e Desenvolvimento de Sistemas</h3>
          <h4 className="vertical-timeline-element-subtitle">Universidade Metodista de São Paulo</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineBox>
  );
};

export default TimelineAbout;
