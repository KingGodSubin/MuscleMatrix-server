package com.musclematrix.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.musclematrix.DTO.TeacherDTO;
import com.musclematrix.domain.Teacher;
import com.musclematrix.service.HistoryService;
import com.musclematrix.service.ProgramService;
import com.musclematrix.service.TeacherService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ApplyController extends BaseController{
	
	// PT선생님
	private final TeacherService teacherService;
	
	// PT선생님 진행 프로그램
	private final ProgramService programService;
	
	@GetMapping("/apply/apply")
	public String viewApply(Model model) {
		List<TeacherDTO> tvds = new ArrayList<TeacherDTO>();
		List<Teacher> teachers = teacherService.findAll();
		
		for (Teacher teacher : teachers) {
			TeacherDTO tvd = new TeacherDTO();
			tvd.setTeacher_name(teacher.getTeacher_name());
			tvd.setTeacher_profile(teacher.getTeacher_profile());
			tvd.setTeacher_KAKAOLINK(teacher.getTeacher_KAKAOLINK());
			tvd.setPrograms(programService.findAllByTeacherId(teacher.getTeacher_id()));
			
			tvds.add(tvd);
		}
		
		model.addAttribute("tvds", tvds);
		return "/apply/apply";
	}
}
