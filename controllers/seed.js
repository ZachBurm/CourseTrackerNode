const mongoose = require('mongoose');
const Student = require('../models/student');
const Focus = require('../models/focus');
const Course = require('../models/course');

module.exports = {

	createDB(req, res, next) {
		
		//Computer Science Major and Courses
	
		const course = new Course({ name: 'Intro to Computer Science I', courseNum: 1617, numHours: 4 });
		course.save();
		
		const major = new Focus({ name: 'Computer Science', numHours: 32, numMinors: 2, abbrv: 'COMP', type: 'Major' });
		major.cores.push(course);			
	
		const course2355 = new Course({
			name: 'Intro to Systems Programming',
			courseNum: 2355,
			numHours: 4
		});
		course2355.save();
		major.cores.push(course2355);
		
		const course2370 = new Course({
			name: 'Intro to Algorithms',
			courseNum: 2370,
			numHours: 4
		});
		course2370.save();
		major.cores.push(course2370);
		
		const course2591 = new Course({
			name: 'Intro to Computer Organization',
			courseNum: 2691,
			numHours: 4
		});
		course2591.save();
		major.cores.push(course2591);

		
		const course3351 = new Course({
			name: 'Programming Languages',
			courseNum: 3351,
			numHours: 4
		});
		course3351.save();
		major.cores.push(course3351);

		
		const course3361 = new Course({
			name: 'Operating Systems I',
			courseNum: 3361,
			numHours: 4
		});
		course3361.save();
		major.electives.push(course3361);

		
		const course2935 = new Course({
			name: 'Software Engineering',
			courseNum: 2935,
			numHours: 4
		});
		course2935.save();
		major.electives.push(course2935);

		
		const course3421 = new Course({
			name: 'Database Organization & Management I',
			courseNum: 3421,
			numHours: 4
		});
		course3421.save();
		major.electives.push(course3421);

		major.save();
		
		//Business Major and Courses
			
		const busMajor = new Focus({ name: 'Business Admin', numHours: 32, numMinors: 2, abbrv: 'BUS', type: 'Major' });		
	
		const course2300 = new Course({
			name: 'Accounting for Decision Making ',
			courseNum: 2300,
			numHours: 4
		});
		course2300.save();
		busMajor.cores.push(course2300);
	
		const course1000 = new Course({
			name: 'Gateway to Business',
			courseNum: 1000,
			numHours: 4
		});
		course1000.save();
		busMajor.cores.push(course1000);
		
		const course2200 = new Course({
			name: 'Introduction to Finacial Reporting',
			courseNum: 2200,
			numHours: 4
		});
		course2200.save();
		busMajor.cores.push(course2200);
		
		const course2100 = new Course({
			name: 'Management and Organizational Behavior',
			courseNum: 2100,
			numHours: 4
		});
		course2100.save();
		busMajor.cores.push(course2100);

		
		const course2800 = new Course({
			name: 'Intro to Marketing',
			courseNum: 3351,
			numHours: 4
		});
		course2800.save();
		busMajor.cores.push(course2800);

		
		const course2000 = new Course({
			name: 'Founcations of Business Law',
			courseNum: 2000,
			numHours: 4
		});
		course2000.save();
		busMajor.electives.push(course2000);

		
		const course2420 = new Course({
			name: 'International Management',
			courseNum: 2420,
			numHours: 4
		});
		course2420.save();
		busMajor.electives.push(course2420);

		
		const course3280 = new Course({
			name: 'Entrepreneurial Business Plan',
			courseNum: 3280,
			numHours: 4
		});
		course3280.save();
		busMajor.electives.push(course3280);

		busMajor.save()
			
		
		//Bus Analytics Minor
			
		const busMinor = new Focus({ name: 'Business Analytics', numHours: 8, numMinors: 0, abbrv: 'BUS', type: 'Minor' });		
	
		const course1020 = new Course({
			name: 'Analytics II: Business Statistics & Analysis',
			courseNum: 1020,
			numHours: 4
		});
		course1020.save();
		busMinor.cores.push(course1020);
	
		const course2020 = new Course({
			name: 'Business Modeling',
			courseNum: 2020,
			numHours: 4
		});
		course2020.save();
		busMinor.cores.push(course2020);
		
		busMinor.save()
		
		//Math Minor
			
		const mathMinor = new Focus({ name: 'Math Minor', numHours: 8, numMinors: 0, abbrv: 'MATH', type: 'Minor' });		
	
		const course1951 = new Course({
			name: 'Calculus I',
			courseNum: 1951,
			numHours: 4
		});
		course1951.save();
		mathMinor.cores.push(course1951);
	
		const course1952 = new Course({
			name: 'Calculus II',
			courseNum: 1952,
			numHours: 4
		});
		course1952.save();
		mathMinor.cores.push(course1952);
		
		mathMinor.save()
		
		//Psyc Minor
			
		const PsycMinor = new Focus({ name: 'Psychology', numHours: 8, numMinors: 0, abbrv: 'PSYC', type: 'Minor' });		
	
		const course2500 = new Course({
			name: 'Abnormal Psychology',
			courseNum: 2500,
			numHours: 4
		});
		course2500.save();
		PsycMinor.cores.push(course2500);
	
		const course1001 = new Course({
			name: 'Foundations of Psychological Science',
			courseNum: 1001,
			numHours: 4
		});
		course1001.save();
		PsycMinor.cores.push(course1001);
		
		PsycMinor.save()
			.then(final => res.send(final))
			.catch(next);

	}
	
	dropDB(req, res, next) {
		if(req.params.pass === 'zach') {
			const {students} = mongoose.connection.collections;
			const {focus} = mongoose.connection.collections;
			const {courses} = mongoose.connection.collections;
			Promise.all([ students.drop(), focus.drop(), courses.drop() ])
				.then(() => {
					res.send('Dropped');
					done();
				})
				.catch(() => done());
			}
	}

};