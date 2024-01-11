import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';
import { jobs } from '../utils/jobsList';
import { useTranslation } from 'react-i18next';

const TimeLine = () => {

    const { t } = useTranslation()

    return (
        <>
            <h2 id='experience' className="m-4">{t('workExperience')}</h2>
            <VerticalTimeline>
                {
                    jobs.map((job) => (
                        <VerticalTimelineElement
                            key={job.subTitle}
                            className="vertical-timeline-element--work"
                            contentStyle={{ boxShadow: '0 3px #000' }}
                            date={job.date}
                            iconStyle={{ width:'48px', height: '48px', marginLeft: '-24px' }}
                            icon={<Icon icon="material-symbols:work-outline" />}
                        >
                            <h3 className="vertical-timeline-element-title">{t(job.title)}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{job.subTitle}</h4>
                            <div className='text-start m-2'>
                                <ul className='list-group'>
                                    {job.tasks.map((task, index) => (
                                        <li key={index}>{t(task)}</li>
                                    ))}
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
            <hr />
        </>
    )
}

export default TimeLine